import { apiInitializer } from "discourse/lib/api";

const STAFF_GROUPS = {
  developers: "fr-staff-avatar--developers",
  leaddeveloper: "fr-staff-avatar--leaddeveloper",
};

export default apiInitializer("1.0.0", (api) => {
  api.customUserAvatarClasses((user) => {
    const group = user?.primary_group_name?.toLowerCase();
    if (group && STAFF_GROUPS[group]) {
      return ["fr-staff-avatar", STAFF_GROUPS[group]];
    }
    return [];
  });
});
