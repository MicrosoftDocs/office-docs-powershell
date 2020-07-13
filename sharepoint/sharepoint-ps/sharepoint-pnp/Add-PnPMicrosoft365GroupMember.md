---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/add-pnpmicrosoft365groupmember
applicable: SharePoint Online
schema: 2.0.0
title: Add-PnPMicrosoft365GroupMember
---

# Add-PnPMicrosoft365GroupMember

## SYNOPSIS

**Required Permissions**

  *  Microsoft Graph API: All of Group.ReadWrite.All, User.ReadWrite.All

Adds members to a particular Microsoft 365 Group

## SYNTAX 

```powershell
Add-PnPMicrosoft365GroupMember -Identity <Microsoft365GroupPipeBind>
                               -Users <String[]>
                               [-RemoveExisting [<SwitchParameter>]]
                               [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Add-PnPMicrosoft365GroupMember -Identity "Project Team" -Users "john@contoso.onmicrosoft.com","jane@contoso.onmicrosoft.com"
```

Adds the provided two users as additional members to the Microsoft 365 Group named "Project Team"

### ------------------EXAMPLE 2------------------
```powershell
Add-PnPMicrosoft365GroupMember -Identity "Project Team" -Users "john@contoso.onmicrosoft.com","jane@contoso.onmicrosoft.com" -RemoveExisting
```

Sets the provided two users as the only members of the Microsoft 365 Group named "Project Team" by removing any current existing members first

## PARAMETERS

### -ByPassPermissionCheck
Allows the check for required permissions in the access token to be bypassed when set to $true

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Identity
The Identity of the Microsoft 365 Group to add members to

```yaml
Type: Microsoft365GroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -RemoveExisting
If provided, all existing members will be removed and only those provided through Users will become members

```yaml
Type: SwitchParameter
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Users
The UPN(s) of the user(s) to add to the Microsoft 365 Group as a member

```yaml
Type: String[]
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)[Documentation](https://docs.microsoft.com/graph/api/group-post-members)