---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/remove-pnpmicrosoft365group
applicable: SharePoint Online
schema: 2.0.0
title: Remove-PnPMicrosoft365Group
---

# Remove-PnPMicrosoft365Group

## SYNOPSIS

**Required Permissions**

  * Microsoft Graph API: Group.ReadWrite.All

Removes one Microsoft 365 Group

## SYNTAX 

```powershell
Remove-PnPMicrosoft365Group -Identity <Microsoft365GroupPipeBind>
                            [-ByPassPermissionCheck [<SwitchParameter>]]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Remove-PnPMicrosoft365Group -Identity $groupId
```

Removes an Microsoft 365 Group based on its ID

### ------------------EXAMPLE 2------------------
```powershell
Remove-PnPMicrosoft365Group -Identity $group
```

Removes the provided Microsoft 365 Group

### ------------------EXAMPLE 3------------------
```powershell
Get-PnPMicrosoft365Group | ? Visibility -eq "Public" | Remove-PnPMicrosoft365Group
```

Removes all the public Microsoft 365 Groups

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
The Identity of the Microsoft 365 Group

```yaml
Type: Microsoft365GroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)