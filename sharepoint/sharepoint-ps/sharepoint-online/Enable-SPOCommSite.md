---
external help file: sharepointonline.xml
Module Name: Microsoft.Online.SharePoint.PowerShell
online version: https://docs.microsoft.com/powershell/module/sharepoint-online/enable-spocommsite
applicable: SharePoint Online
title: Enable-SPOCommSite
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer:
---

# Enable-SPOCommSite

## SYNOPSIS

Enables the  communication site experience on an existing classic team site. Please read instructions in [modernize classic team site](https://docs.microsoft.com/en-us/sharepoint/modernize-classic-team-site) before attempting to execute this cmdlet.

## SYNTAX

```powershell
Enable-SPOCommSite [-SiteUrl] <string> [-DesignPackageId] <GUID>
```

## DESCRIPTION

Use this cmdlet to enable the modern communication site experience in classic team sites. You must use the SharePoint admin powershell version 20122.1200 or greater. Use of this cmdlet is subject to rollout of capability.

## EXAMPLES

### Example 1

```powershell
Enable-SPOCommSite -SiteUrl https://contoso.sharepoint.com
```

This example enables the communication site experience at this <https://contoso.sharepoint.com> site.

### Example 2

```powershell
$orgName="<tenantname>"
$SiteURL = "<Classic site URL>"
Connect-SPOService -Url https://$orgName-admin.sharepoint.com
Enable-SPOCommSite -SiteUrl $SiteURL
```

**TROUBLESHOOTING**

**Error case 1: Wrong credentials**

If the SharePoint admin user credentials is wrong or invalid, you will see this error:

>*Connect-SPOService : The sign-in name or password does not match one in the Microsoft account system.*

**Error case 2: Feature is not yet enabled for your tenant**

The use of this cmdlet is subject to the feature rollout. If the feature is not yet available for your tenant, the cmdlet will not execute and will show this error:

>*Enable-SPOCommSite : The requested operation is part of an experimental feature that is not supported in the current environment.*

**Error case 3: Site URL input is invalid**

If the site URL input points to a site that does not exist, you will see the following error message:

>*Enable-SPOCommSite : File Not Found.*

**Error case 4: Classic publishing feature is currently enabled**

We do not support sites that currently have or have had in the past enabled the classic publishing features. If you see this error, your site is not eligible for this feature enablement. Please check [requirements for this feature](https://docs.microsoft.com/sharepoint/modernize-classic-team-site)

>*Enable-SPOCommSite : The operation cannot be performed because the Publishing feature is enabled on the site.*

## PARAMETERS

### -SiteUrl

URL of the site for enabling the modern communication site experience. **This is a required parameter**

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DesignPackageId

GUID identifying the [communication site design](https://support.office.com/article/what-is-a-sharepoint-communication-site-94a33429-e580-45c3-a090-5512a8070732). **This is not a required input.** If no input is provided, the topic design will be applied to the new home page. here are the IDs for the supported design packages:

1. Topic: 96c933ac-3698-44c7-9f4a-5fd17d71af9e
2. Showcase: 6142d2a0-63a5-4ba0-aede-d9fefca2c767
3. Blank: f6cc5403-0d63-442e-96c0-285923709ffc

```yaml
Type: GUID
Parameter Sets: (All)
Aliases:
Applicable: SharePoint Online
Required: False
Position: Named
Default value: 96c933ac-3698-44c7-9f4a-5fd17d71af9e
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters

This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
