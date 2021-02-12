---
Module Name: PnP.PowerShell
title: Get-PnPSiteUserInvitations
schema: 2.0.0
applicable: SharePoint Online
external help file: PnP.PowerShell.dll-Help.xml
online version: https://pnp.github.io/powershell/cmdlets/Get-PnPSiteUserInvitations.html
---
 
# Get-PnPSiteUserInvitations

## SYNOPSIS

> [!TIP]
> We encourage you to make improvements to this documentation. Please navigate to https://github.com/pnp/powershell/blob/dev/documentation/Get-PnPSiteUserInvitations.md to change this file.


**Required Permissions**

* SharePoint: Access to the SharePoint Tenant Administration site

Searches against all stored sharing links and retrieves the email invites

## SYNTAX

```powershell
Get-PnPSiteUserInvitations [[-Site] <SitePipeBind>] -EmailAddress <string>
   [<CommonParameters>]
```

## DESCRIPTION
Searches against all stored sharing links on a Site and retrieves the email invites. If the site parameter is omitted the current site will be searched.
## EXAMPLES

### EXAMPLE 1
```powershell
Get-PnPSiteUserInvitations -Site "https://contoso.sharepoint.com/sites/ContosoWeb1/" -EmailAddress someone@example.com
```

This example retrieves email invites stored in the ContosoWeb1 site to the user with email address someone@example.com.

## PARAMETERS

### -Site
Specifies the URL of the site collection.

```yaml
Type: SitePipeBind
Parameter Sets: (All)

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EmailAddress
Email Address of the user.

```yaml
Type: String
Parameter Sets: (All)

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## RELATED LINKS

[Microsoft 365 Patterns and Practices](https://aka.ms/m365pnp)

