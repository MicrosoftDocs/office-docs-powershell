---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/reset-pnpuseronedrivequotatodefault
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Reset-PnPUserOneDriveQuotaToDefault
---

# Reset-PnPUserOneDriveQuotaToDefault

## SYNOPSIS

**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Resets the current quota set on the OneDrive for Business site for a specific user to the tenant default

## SYNTAX 

```powershell
Reset-PnPUserOneDriveQuotaToDefault -Account <String>
                                    [-Connection <PnPConnection>]
```

## DESCRIPTION
This command allows you to reset the quota set on the OneDrive for Business site of a specific user to the default as set on the tenant. You must connect to the tenant admin website (https://:<tenant>-admin.sharepoint.com) with Connect-PnPOnline in order to use this cmdlet.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Reset-PnPUserOneDriveQuotaToDefault -Account 'user@domain.com'
```

Resets the quota set on the OneDrive for Business site for the specified user to the tenant default

## PARAMETERS

### -Account
The account of the user, formatted either as a login name, or as a claims identity, e.g. i:0#.f|membership|user@domain.com

Only applicable to: SharePoint Online

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: 0
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online

```yaml
Type: PnPConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](https://aka.ms/sppnp)