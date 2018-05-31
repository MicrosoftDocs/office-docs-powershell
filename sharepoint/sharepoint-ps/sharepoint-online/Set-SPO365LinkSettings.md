---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Set-SPO365LinkSettings
schema: 2.0.0
---

# Set-SPO365LinkSettings

## SYNOPSIS
This cmdlet allows the SharePoint administrator to configure hybrid settings.


## SYNTAX

```
Set-SPO365LinkSettings [-AssignmentCollection <SPAssignmentCollection>] [-Audiences <String[]>]
 [-HybridAppLauncherEnabled <Boolean>] -MySiteHostUrl <String> [-OnedriveDefaultToCloudEnabled <Boolean>]
 [-RedirectSites <Boolean>] [-RedirectUserProfileEnabled <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet allows the SharePoint administrator to configure the following hybrid settings.

* Hybrid OneDrive for Business
* Hybrid Sites
* Redirecting Everyone or one or more Audiences
* Hybrid App Launcher
* Default OneDrive to the Cloud
* User Profile Redirection

>[!NOTE]Microsoft recommends using the [Hybrid Picker](https://docs.microsoft.com/en-us/sharepoint/hybrid/hybrid-picker-in-the-sharepoint-online-admin-center) to configure these settings.

> [!NOTE]Default OneDrive to the Cloud for SharePoint Server 2016 was first included in the [May 2018 Public Update] (https://support.microsoft.com/help/4018381).

> [!NOTE]In SharePoint Server 2016, User Profile redirection is enabled when OneDrive for Business hybrid is configured.

## EXAMPLES

### --------------------EXAMPLE---------------------
```
PS C:\>Set-SPO365LinkSettings -MySiteHostUrl https://sharepoint-my.contoso.com -OnedriveDefaultToCloudEnabled $true -RedirectSites $true
```

This cmdlet enables the redirection of OneDrive to the Cloud by default and enables redirection of Sites.


## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.


```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Audiences
Specify one or more SharePoint Audiences from the User Profile Service to target specific groups of users for the hybrid configuration. If this switch is omitted, everyone will be redirected.

```yaml
Type: String[]
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -HybridAppLauncherEnabled
Enables the Hybrid App Launcher.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -MySiteHostUrl
The URL of the on-premises MySite Host. This URL must be a site that uses the SPSMSITEHOST#0 template.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -OnedriveDefaultToCloudEnabled
Enables redirection of OneDrive sites to the Cloud by default.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -RedirectSites
Redirects Sites to SharePonit Online.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### -RedirectUserProfileEnabled
Redirects User Profiles to SharePoint Online.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
System.String[]
System.Boolean
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
