---
external help file: Microsoft.Office.Server.UserProfiles.dll-help.xml
Module Name: Microsoft.Sharepoint.Powershell
online version: https://docs.microsoft.com/powershell/module/sharepoint-server/set-spprofileserviceapplication
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPProfileServiceApplication
schema: 2.0.0
author: techwriter40
ms.author: kirks
ms.reviewer:
---

# Set-SPProfileServiceApplication

## SYNOPSIS
Sets properties of a User Profile Service application.

## SYNTAX

### Default
```
Set-SPProfileServiceApplication [-Identity] <SPServiceApplicationPipeBind>
 [-ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-GetNonImportedObjects <Boolean>] [-MySiteHostLocation <SPSitePipeBind>]
 [-ProfileDBCredentials <PSCredential>] [-ProfileSyncDBCredentials <PSCredential>]
 [-ProfileSyncDBFailoverServer <String>] [-PurgeNonImportedObjects <Boolean>]
 [-SocialDBCredentials <PSCredential>] [-SocialDBFailoverServer <String>] [-Name <String>]
 [-UseOnlyPreferredDomainControllers <Boolean>] [-WhatIf] [-ProfileDBFailoverServer <String>]
 [<CommonParameters>]
```

### MySiteSettings
```
Set-SPProfileServiceApplication [-Identity] <SPServiceApplicationPipeBind>
 [-ApplicationPool <SPIisWebServiceApplicationPoolPipeBind>] [-AssignmentCollection <SPAssignmentCollection>]
 [-Confirm] [-GetNonImportedObjects <Boolean>] -MySiteHostLocation <SPSitePipeBind>
 [-MySiteManagedPath <SPPrefixPipeBind>] [-ProfileDBCredentials <PSCredential>]
 [-ProfileSyncDBCredentials <PSCredential>] [-ProfileSyncDBFailoverServer <String>]
 [-PurgeNonImportedObjects <Boolean>] [-SiteNamingConflictResolution <String>]
 [-SocialDBCredentials <PSCredential>] [-SocialDBFailoverServer <String>] [-Name <String>]
 [-UseOnlyPreferredDomainControllers <Boolean>] [-WhatIf] [-ProfileDBFailoverServer <String>]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see [Cmdlet parameter sets](https://docs.microsoft.com/powershell/scripting/developer/cmdlet/cmdlet-parameter-sets).

The Set-SPProfileServiceApplication cmdlet sets properties of a User Profile Service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at [SharePoint Server Cmdlets](https://docs.microsoft.com/powershell/sharepoint/sharepoint-server/sharepoint-server-cmdlets).


## EXAMPLES

### ---------------EXAMPLE---------------------
```
$sa = Get-SPServiceApplication | ?{$_.TypeName -eq 'User Profile Service Application'}
Set-SPProfileServiceApplication -Identity $sa -PurgeNonImportedObjects:$true
```

This example purges objects from the Profile database which are not in scope of the User Profile import.


## PARAMETERS

### -Identity
Specifies the User Profile Service application to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a subscription settings service application (for example, SubscriptionSettingsApp1); or an instance of a valid SPServiceApplication object.

```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ApplicationPool
Specifies the existing IIS application pool in which to run the Web service for the service application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of an application pool (for example, AppPoolName1); or an instance of a valid IISWebServiceApplicationPool object.

```yaml
Type: SPIisWebServiceApplicationPoolPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal.
Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management.
Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory.
When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store.
If objects are not immediately used, or disposed of by using the `Stop-SPAssignment` command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -GetNonImportedObjects
Specifies whether to inform the users that did not come from the import pipeline and will be marked for deletion.
The list of users marked for deletion is displayed to the console window.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MySiteHostLocation
Specifies the site collection where the My Site will be provisioned.

The type must be a valid URL, in the form https://server_name; a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a site subscription (for example, SiteSubscription1); or an instance of a valid SiteSubscription object.

```yaml
Type: SPSitePipeBind
Parameter Sets: Default
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

```yaml
Type: SPSitePipeBind
Parameter Sets: MySiteSettings
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -MySiteManagedPath
Specifies the managed path location of personal sites.

The type must be a valid URL, in the form https://server_name.

```yaml
Type: SPPrefixPipeBind
Parameter Sets: MySiteSettings
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ProfileDBCredentials
Specifies the set of security credentials, such as a user name and a password, that is used to connect to the User Profile database that this cmdlet creates.

The type must be a valid PSCredential object.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProfileSyncDBCredentials
Specifies the set of security credentials, such as a user name and a password, that will be used to connect to the Profile Sync database that is specified in the ProfileSyncDBName parameter.

The type must be a valid PSCredential object.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProfileSyncDBFailoverServer
Specifies the name of the failover SQL server for Profile database.
It is used to build the connection string for the Profile database.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PurgeNonImportedObjects
Specifies whether to mark the non-imported users in the profile store for deletion and then inform the users that did not come from the import pipeline which will be marked for deletion.
The list of users marked for deletion is displayed on the console window

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteNamingConflictResolution
Specifies the format to use to name personal sites.

Use one of the following integer values:

1--Personal site collections are to be based on user names without any conflict resolution.
For example, https://portal_site/location/username/

2-- Personal site collections are to be based on user names with conflict resolution by using domain names.
For example, .../username/ or .../domain_username/

3   Personal site collections are to be named by using domain and user name always, to avoid any conflicts.
For example, https://portal_site/location/domain_username/

The default value is 1 (do not resolve conflicts).

```yaml
Type: String
Parameter Sets: MySiteSettings
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SocialDBCredentials
The set of security credentials, including a user name and a password, that is used to connect to the Social database that this cmdlet creates.

The type must be a valid PSCredential object.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SocialDBFailoverServer
Specifies the name of the failover SQL server for Social database.
It is used to build the connection string for the Social database.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the display name for the new User Profile Service application.
The name that you use must be a unique name of a User Profile Service application in this farm.
The name can be a maximum of 128 characters.

The type must be a valid name of a User Profile Service application; for example, UserProfileSvcApp1.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseOnlyPreferredDomainControllers
Restricts profile synchronization communication to a specific domain controller.

The valid values are $true or $false.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: `get-help about_commonparameters`

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProfileDBFailoverServer
Specifies the name of the failover SQL server for Profile database. It is used to build the connection string for the Profile database.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
