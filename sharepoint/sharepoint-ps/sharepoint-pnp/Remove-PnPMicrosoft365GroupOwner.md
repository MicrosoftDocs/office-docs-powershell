---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpmicrosoft365groupowner
applicable: SharePoint Online
schema: 2.0.0
title: Remove-PnPMicrosoft365GroupOwner
---

# Remove-PnPMicrosoft365GroupOwner

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API : One of Directory.ReadWrite.All, Group.ReadWrite.All

Removes owners from a particular Microsoft 365 Group

## SYNTAX 

```powershell
Remove-PnPMicrosoft365GroupOwner -Identity <Microsoft365GroupPipeBind>
                                 -Users <String[]>
                                 [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPMicrosoft365GroupOwner -Identity "Project Team" -Users "john@contoso.onmicrosoft.com","jane@contoso.onmicrosoft.com"
```

Removes the provided two users as owners from the Microsoft 365 Group named "Project Team"

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
The Identity of the Microsoft 365 Group to remove owners from

```yaml
Type: Microsoft365GroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

### -Users
The UPN(s) of the user(s) to remove as owners from the Microsoft 365 Group

```yaml
Type: String[]
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)[Documentation](https://docs.microsoft.com/graph/api/group-delete-owners)