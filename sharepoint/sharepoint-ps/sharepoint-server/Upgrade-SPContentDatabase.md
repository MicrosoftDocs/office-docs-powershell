---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Upgrade-SPContentDatabase

## SYNOPSIS
Resumes a failed database upgrade or begins a build-to-build database upgrade.


## SYNTAX

### ContentDatabaseById
```
Upgrade-SPContentDatabase [-Identity] <SPContentDatabasePipeBind> [-ForceDeleteLock]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-NoB2BSiteUpgrade]
 [-ServerInstance <SPDatabaseServiceInstancePipeBind>] [-SkipIntegrityChecks] [-UseSnapshot] [-WhatIf]
 [-AllowUnattached] [-SkipSiteUpgrade] [<CommonParameters>]
```

### ContentDatabaseByName
```
Upgrade-SPContentDatabase [-ForceDeleteLock] -Name <String> -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-NoB2BSiteUpgrade]
 [-ServerInstance <SPDatabaseServiceInstancePipeBind>] [-SkipIntegrityChecks] [-UseSnapshot] [-WhatIf]
 [-AllowUnattached] [-SkipSiteUpgrade] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the `Upgrade-SPContentDatabase` cmdlet to resume a failed database upgrade or begin a build-to-build database upgrade against a SharePoint content database.
The `Upgrade-SPContentDatabase` cmdlet initiates an upgrade of an existing content database that is attached to the current farm.
This cmdlet begins a new upgrade session, which can be used either to resume a failed version-to-version or build-to-build upgrade of a content database or to begin a build-to-build upgrade of a content database.

If the database is hosted on a version of SQL Server that supports creation and use of snapshots of the database, this cmdlet can use a database snapshot for build-to-build upgrades. 
During upgrade, users see a ready-only version of the database, which is the snapshot.
After upgrade users see upgraded content.

The default behavior of this cmdlet causes an upgrade of the schema of the database and initiates build-to-build upgrades for all site collections within the specified content database if required.
To prevent build-to-build upgrades of site collections, use the NoB2BSiteUpgrade parameter.
This cmdlet does not trigger version-to-version upgrade of any site collections.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------------EXAMPLE 1------------------------------
```
C:\PS>Upgrade-SPContentDatabase WSS_Content
```

This example upgrades the existing WSS_Content content database schema and then performs only build-to-build upgrade actions on existing site collections if required.
This operation does not changed the CompatibilityLevel for existing site collections in this database.

### --------------------------EXAMPLE 2------------------------------
```
C:\PS>Upgrade-SPContentDatabase WSS_Content -NoB2BSiteUpgrade
```

This example upgrades the existing WSS_Content content database schema only.
No build-to-build upgrade actions are performed on any site collections.
This operation does not change The CompatibilityLevel for existing site collections in this database.

### --------------------------EXAMPLE 3------------------------------
```
C:\PS>Upgrade-SPContentDatabase WSS_Content -NoB2BSiteUpgrade -UseSnapshot
```

This example upgrades the existing WSS_Content content database schema only while using a snapshot of the database to retain read-only access to the content during the upgrade. 
No build-to-build upgrade actions are performed on any site collections.
This operation does not change the CompatibilityLevel for existing site collections in this database.

## PARAMETERS

### -Identity
Specifies the content database to upgrade.

The value must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh or an instance of a valid SPContentDatabase object.

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: ContentDatabaseById
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ForceDeleteLock
Forces deletion of locks on the database before the upgrade starts.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
Specifies the name of attached content database.

```yaml
Type: String
Parameter Sets: ContentDatabaseByName
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebApplication
Specifies the web application that hosts the attached content database.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: ContentDatabaseByName
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoB2BSiteUpgrade
Specifies to not upgrade all child objects when performing a build-to-build upgrade.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServerInstance
The SQL Server instance that hosts the attached content database.

```yaml
Type: SPDatabaseServiceInstancePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipIntegrityChecks
Specifies the upgrade process not to run the internal integrity checks such as missing templates and orphan detection as part of the upgrade process.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseSnapshot
Specifies to use the snapshot method to perform unattached upgrade.
This will make a snapshot of the current database and then perform all upgrade operations that apply to the database and optionally to its contents.

The existing connections to the content database will be set to use the snapshot for the duration of the upgrade and then switched back after successful completion of upgrade.
A failed upgrade reverts the database to its state when the snapshot was taken.

This parameter only works for versions of SQL Server that support creation and use of snapshots, for example, SQL ServerEnterprise edition.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowUnattached
{{Fill AllowUnattached Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SkipSiteUpgrade
{{Fill SkipSiteUpgrade Description}}

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: NoB2BSiteUpgrade
Applicable: SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS
