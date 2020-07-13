---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpmicrosoft365groupmember
applicable: SharePoint Online
schema: 2.0.0
title: Remove-PnPMicrosoft365GroupMember
---

# Remove-PnPMicrosoft365GroupMember

## SYNOPSIS
Removes members from a particular Microsoft 365 Group

## SYNTAX 

```powershell
Remove-PnPMicrosoft365GroupMember -Identity <Microsoft365GroupPipeBind>
                                  -Users <String[]>
                                  [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API : One of Directory.ReadWrite.All, Group.ReadWrite.All, GroupMember.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPMicrosoft365GroupMember -Identity "Project Team" -Users "john@contoso.onmicrosoft.com","jane@contoso.onmicrosoft.com"
```

Removes the provided two users as members from the Microsoft 365 Group named "Project Team"

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
The Identity of the Microsoft 365 Group to remove members from

```yaml
Type: Microsoft365GroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -Users
The UPN(s) of the user(s) to remove as members from the Microsoft 365 Group

```yaml
Type: String[]
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)[Documentation](https://docs.microsoft.com/graph/api/group-delete-members)