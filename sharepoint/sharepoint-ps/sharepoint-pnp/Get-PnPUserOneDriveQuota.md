---
external help file:
online version: https://docs.microsoft.com/powershell/module/sharepoint-pnp/get-pnpuseronedrivequota
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019, SharePoint Online
schema: 2.0.0
title: Get-PnPUserOneDriveQuota
---

# Get-PnPUserOneDriveQuota

## SYNOPSIS
Retrieves the current quota set on the OneDrive for Business site for a specific user

## SYNTAX 

```powershell
Get-PnPUserOneDriveQuota -Account <String>
                         [-Connection <PnPConnection>]
```

## REQUIRED PERMISSIONS

* SharePoint: Access to the SharePoint Tenant Administration site

## DESCRIPTION
This command allows you to request the quota set on the OneDrive for Business site of a specific user. You must connect to the tenant admin website (https://:<tenant>-admin.sharepoint.com) with Connect-PnPOnline in order to use this cmdlet.

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Get-PnPUserOneDriveQuota -Account 'user@domain.com'
```

Returns the quota set on the OneDrive for Business site for the specified user

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