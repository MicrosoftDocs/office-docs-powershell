---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpdeletedmicrosoft365group
applicable: SharePoint Online
schema: 2.0.0
title: Get-PnPDeletedMicrosoft365Group
---

# Get-PnPDeletedMicrosoft365Group

## SYNOPSIS
Gets one deleted Microsoft 365 Group or a list of deleted Microsoft 365 Groups

## SYNTAX 

```powershell
Get-PnPDeletedMicrosoft365Group [-Identity <Microsoft365GroupPipeBind>]
                                [-ByPassPermissionCheck [<SwitchParameter>]]
```

## REQUIRED PERMISSIONS

  * Microsoft Graph API : One of Group.Read.All, Group.ReadWrite.All

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPDeletedMicrosoft365Group
```

Retrieves all deleted Microsoft 365 Groups

### ------------------EXAMPLE 2------------------
```powershell
Get-PnPDeletedMicrosoft365Group -Identity 38b32e13-e900-4d95-b860-fb52bc07ca7f
```

Retrieves a specific deleted Microsoft 365 Group based on its ID

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

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)