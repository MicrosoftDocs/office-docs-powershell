---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/restore-pnpdeletedmicrosoft365group
applicable: SharePoint Online
schema: 2.0.0
title: Restore-PnPDeletedMicrosoft365Group
---

# Restore-PnPDeletedMicrosoft365Group

## SYNOPSIS
Restores one deleted Microsoft 365 Group

## SYNTAX 

```powershell
Restore-PnPDeletedMicrosoft365Group -Identity <Microsoft365GroupPipeBind>
                                    [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API: Group.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Restore-PnPDeletedMicrosoft365Group -Identity 38b32e13-e900-4d95-b860-fb52bc07ca7f
```

Restores a deleted Microsoft 365 Group based on its ID

### ------------------EXAMPLE 2------------------
```powershell
$group = Get-PnPDeletedMicrosoft365Group -Identity 38b32e13-e900-4d95-b860-fb52bc07ca7f
Restore-PnPDeletedMicrosoft365Group -Identity $group
```

Restores the provided deleted Microsoft 365 Group

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
The Identity of the deleted Microsoft 365 Group

```yaml
Type: Microsoft365GroupPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: True
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)[Documentation](https://docs.microsoft.com/graph/api/directory-deleteditems-restore)