---
external help file: sharepointonline.xml
applicable: SharePoint Online
title: Enable-SPOCommSite
schema: 2.0.0
author: trent-green
ms.author: trgreen
ms.reviewer: 
---

# Enable-SPOCommSite

## SYNOPSIS

Enables the modern communication site experience on an existing site.

**At this time, based on early adopter feedback, we have decided to postpone rolling out this feature. We apologize for any inconvenience and will communicate a new schedule via Message Center, once it is available. You can also check [Microsoft 365 Roadmap](https://www.microsoft.com/microsoft-365/roadmap) for latest updates to this feature.**

## SYNTAX

```powershell
Enable-SPOCommSite [-SiteUrl] <string> [-DesignPackageId] <GUID>
```

## DESCRIPTION

Use this cmdlet to enable the modern communication site experience at the classic root site of a tenant. You must use the SharePoint admin powershell version 8715.1200 or greater. Use of this cmdlet is subject to rollout of capability.

**Current limitations**

1. This cmdlet can only be run on the root site of a tenant. Typically the root site url is <https://tenantname.sharepoint.com>
2. The root site should not currently have the classic publishing feature enabled (at the site or web level). [What is classic publishing feature?](https://support.office.com/article/enable-publishing-features-479677a6-8b33-4ac7-907d-071c1c7e4518)
3. The root site **should not have had** the classic publishing feature enabled in the past (at the site or web level)
4. The site must have quick launch site navigation enabled. [How do I do this?](https://support.office.com/article/customize-site-navigation-c040f014-acbb-4c98-8174-48428cf02b25#bm1a)

**On successful execution of the cmdlet, customers can expect**

1. A new modern home page will be created for the root site (only the root site web, not subsites of the root site if there are any)
2. Full width pages with horizontal nav will be available (top nav from classic view will be hidden, can be seen in classic pages like the site settings page)
3. NoScript will be turned ON
4. Minor Versioning on the Site Pages library will be enabled
5. Site Pages will be the default content type in the Site Pages library
6. No change in permissions or content in the root site

## EXAMPLES

### Example 1

```powershell
Enable-SPOCommSite -SiteUrl https://contoso.sharepoint.com
```

This example enables the communication site experience at this <https://contoso.sharepoint.com> site.

### Example 2

```powershell
$orgName="<tenantname>"
$rootSiteURL = "<Root site URL>"
Connect-SPOService -Url https://$orgName-admin.sharepoint.com
Enable-SPOCommSite -SiteUrl $rootSiteURL
```

#### STEP BY STEP INSTRUCTIONS

1. Install latest SharePoint Online Management Shell (version 8715.1200 or greater) from [here](https://www.microsoft.com/en-us/download/details.aspx?id=35588). If you have an older version installed, please uninstall it from Windows Add/Remove programs and then install the latest version. Alternatively, if you have used Install-Module Microsoft.Online.SharePoint.PowerShell to install the SharePoint Online Management Shell, you can run Update-Module Microsoft.Online.SharePoint.PowerShell to update the PowerShell module to the latest available version.
2. Make sure you have the SharePoint admin credentials for the tenant
3. Make sure you have the correct root site URL. Typically its <https://tenantname.sharepoint.com>
4. Copy the above PowerShell command(s) into a notepad and fill in the missing details denoted by <>
5. Open SharePoint Online Management Shell from your computer
6. Execute the PowerShell commands from your notepad

#### TROUBLESHOOTING

##### Error case 1: Wrong credentials

If the SharePoint admin user credentials is wrong or invalid, you will see this error:

>*Connect-SPOService : The sign-in name or password does not match one in the Microsoft account system.*

##### Error case 2: Feature is not yet enabled for your tenant

The use of this cmdlet is subject to the feature rollout. If the feature is not yet available for your tenant, the cmdlet will not execute and will show this error:

>*Enable-SPOCommSite : The requested operation is part of an experimental feature that is not supported in the current environment.*

##### Error case 3: Site URL input is not of root site

Currently only the root site of a tenant is supported for this cmdlet. IF the site URL input is wrong, you will see this error:

>*Enable-SPOCommSite : The site provided is not the root site collection. Please provide a valid root site URL.*

##### Error case 4: Site URL input is invalid

If the site URL input points to a site that does not exist, you will see the following error message:

>*Enable-SPOCommSite : File Not Found.*

##### Error case 5: Classic publishing feature is currently enabled

We do not support root site that currently have or have had in the past enabled the classic publishing features. If you see this error, your root site is not eligible for this feature enablement

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
