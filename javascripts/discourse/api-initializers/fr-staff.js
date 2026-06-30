import { apiInitializer } from "discourse/lib/api";

const STAFF_GROUPS = {
  developers: {
    tier: "developers",
    posterClass: "group-Developers",
    cardClass: "Developers",
  },
  leaddeveloper: {
    tier: "leaddeveloper",
    posterClass: "group-LeadDeveloper",
    cardClass: "LeadDeveloper",
  },
};

function normalizeGroupName(name) {
  if (!name) {
    return "";
  }
  return name.toLowerCase().replace(/[\s_-]/g, "");
}

function getStaffTier(userOrAttrs) {
  if (!userOrAttrs) {
    return null;
  }

  const primary = normalizeGroupName(userOrAttrs.primary_group_name);
  if (STAFF_GROUPS[primary]) {
    return STAFF_GROUPS[primary];
  }

  const groups = userOrAttrs.groups;
  if (Array.isArray(groups)) {
    const names = groups.map((g) => normalizeGroupName(g.name || g));

    if (names.includes("leaddeveloper")) {
      return STAFF_GROUPS.leaddeveloper;
    }
    if (names.includes("developers")) {
      return STAFF_GROUPS.developers;
    }
  }

  return null;
}

export default apiInitializer("1.0.0", (api) => {
  api.customUserAvatarClasses((user) => {
    const staff = getStaffTier(user);
    if (!staff) {
      return [];
    }
    return [
      "fr-staff-avatar",
      `fr-staff-avatar--${staff.tier}`,
      staff.posterClass,
    ];
  });

  api.addTopicParticipantClassesCallback((attrs) => {
    const staff = getStaffTier(attrs);
    if (!staff) {
      return [];
    }
    return [staff.posterClass, `fr-staff-participant--${staff.tier}`];
  });
});
