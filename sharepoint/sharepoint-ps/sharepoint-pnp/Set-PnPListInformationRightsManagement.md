---
external help file:
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Online
schema: 2.0.0
---
# Set-PnPListInformationRightsManagement

## SYNOPSIS
Get the site closure status of the site which has a site policy applied

## SYNTAX 

```powershell
Set-PnPListInformationRightsManagement -List <ListPipeBind>
                                       [-Enable <Boolean>]
                                       [-EnableExpiration <Boolean>]
                                       [-EnableRejection <Boolean>]
                                       [-AllowPrint <Boolean>]
                                       [-AllowScript <Boolean>]
                                       [-AllowWriteCopy <Boolean>]
                                       [-DisableDocumentBrowserView <Boolean>]
                                       [-DocumentAccessExpireDays <Int>]
                                       [-DocumentLibraryProtectionExpireDate <DateTime>]
                                       [-EnableDocumentAccessExpire <Boolean>]
                                       [-EnableDocumentBrowserPublishingView <Boolean>]
                                       [-EnableGroupProtection <Boolean>]
                                       [-EnableLicenseCacheExpire <Boolean>]
                                       [-LicenseCacheExpireDays <Int>]
                                       [-GroupName <String>]
                                       [-PolicyDescription <String>]
                                       [-PolicyTitle <String>]
                                       [-TemplateId <String>]
                                       [-Web <WebPipeBind>]
                                       [-Connection <SPOnlineConnection>]
```

## EXAMPLES

### ------------------EXAMPLE 1------------------
```powershell
Set-PnPListInformationRightsManagement -List "Documents" -Enabled $true
```

Enables Information Rights Management (IRM) on the list.

## PARAMETERS

### -AllowPrint
Sets a value indicating whether the viewer can print the downloaded document.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowScript
Sets a value indicating whether the viewer can run a script on the downloaded document.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -AllowWriteCopy
Sets a value indicating whether the viewer can write on a copy of the downloaded document.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -DisableDocumentBrowserView
Sets a value indicating whether to block Office Web Application Companion applications (WACs) from showing this document.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -DocumentAccessExpireDays
Sets the number of days after which the downloaded document will expire.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -DocumentLibraryProtectionExpireDate
Sets the date after which the Information Rights Management (IRM) protection of this document library will stop.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: DateTime
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Enable
Specifies whether Information Rights Management (IRM) is enabled for the list.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EnableDocumentAccessExpire
Sets a value indicating whether the downloaded document will expire.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EnableDocumentBrowserPublishingView
Sets a value indicating whether to enable Office Web Application Companion applications (WACs) to publishing view.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EnableExpiration
Specifies whether Information Rights Management (IRM) expiration is enabled for the list.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EnableGroupProtection
Sets a value indicating whether the permission of the downloaded document is applicable to a group.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EnableLicenseCacheExpire
Sets whether a user must verify their credentials after some interval.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -EnableRejection
Specifies whether Information Rights Management (IRM) rejection is enabled for the list.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Boolean
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -GroupName
Sets the group name (email address) that the permission is also applicable to.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -LicenseCacheExpireDays
Sets the number of days that the application that opens the document caches the IRM license. When these elapse, the application will connect to the IRM server to validate the license.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: Int
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -List
The list to set Information Rights Management (IRM) settings for.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: ListPipeBind
Parameter Sets: (All)

Required: True
Position: Named
Accept pipeline input: False
```

### -PolicyDescription
Sets the permission policy description.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -PolicyTitle
Sets the permission policy title.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -TemplateId


Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: String
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Connection
Optional connection to be used by the cmdlet. Retrieve the value for this parameter by either specifying -ReturnConnection on Connect-PnPOnline or by executing Get-PnPConnection.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: SPOnlineConnection
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

### -Web
This parameter allows you to optionally apply the cmdlet action to a subweb within the current web. In most situations this parameter is not required and you can connect to the subweb using Connect-PnPOnline instead. Specify the GUID, server relative url (i.e. /sites/team1) or web instance of the web to apply the command to. Omit this parameter to use the current web.

Only applicable to: SharePoint Online, SharePoint Server 2013

```yaml
Type: WebPipeBind
Parameter Sets: (All)

Required: False
Position: Named
Accept pipeline input: False
```

## RELATED LINKS

[SharePoint Developer Patterns and Practices](http://aka.ms/sppnp)