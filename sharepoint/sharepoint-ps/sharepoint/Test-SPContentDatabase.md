---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Test-SPContentDatabase

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Tests a content database.



## SYNTAX

### ContentDatabaseById
```
Test-SPContentDatabase [-Identity] <SPContentDatabasePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [-DatabaseCredentials <PSCredential>] [-ExtendedCheck] [-ServerInstance <SPDatabaseServiceInstancePipeBind>]
 [-ShowLocation] [-ShowRowCounts] [<CommonParameters>]
```

### ContentDatabaseByName
```
Test-SPContentDatabase -Name <String> -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-DatabaseCredentials <PSCredential>] [-ExtendedCheck]
 [-ServerInstance <SPDatabaseServiceInstancePipeBind>] [-ShowLocation] [-ShowRowCounts] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

Use the Test-SPContentDatabase cmdlet to test a content database against a Web application to verify all customizations referenced within the content database are also installed in the web application.
This cmdlet can be issued against a content database currently attached to the farm, or a content database that is not connected to the farm.
It can be used to test content databases from SharePoint 2010 Products and from SharePoint Products and Technologies.

The Test-SPContentDatabase cmdlet does not change any of the data or structure of the content database, but can cause load on the database while the checks are in progress, which could temporarily block use of the content database.
This cmdlet should only be used against a content database that is currently under low or no usage.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------------------------EXAMPLE 1----------------------- (SharePoint Server 2013)
```
C:\PS>Test-SPContentDatabase -name WSS_Content_DB -webapplication http://sitename
```

This example tests the WSS_Content_DB content database against the sitename Web application, and returns a list of issues.

### ----------------------------EXAMPLE 1----------------------- (SharePoint Server 2016)
```
C:\PS>Test-SPContentDatabase -name WSS_Content_DB -webapplication http://sitename
```

This example tests the WSS_Content_DB content database against the sitename Web application, and returns a list of issues.

### ----------------------------EXAMPLE 2----------------------- (SharePoint Server 2013)
```
C:\PS>$DB = Get-SPContentDatabase -site http://contoso.com

C:\PS>Test-SPContentDatabase $DB -showrowcounts
```

This example gets the content database that contains the site collection at http://contoso.com, and then tests the database against the Web application that hosts it to determine issues.
Together with displaying the list of issues, by specifying the ShowRowCounts parameter, this also returns the table size metrics from the content database.

### ----------------------------EXAMPLE 2----------------------- (SharePoint Server 2016)
```
C:\PS>$DB = Get-SPContentDatabase -site http://contoso.com

C:\PS>Test-SPContentDatabase $DB -showrowcounts
```

This example gets the content database that contains the site collection at http://contoso.com, and then tests the database against the Web application that hosts it to determine issues.
Together with displaying the list of issues, by specifying the ShowRowCounts parameter, this also returns the table size metrics from the content database.

## PARAMETERS

### -Identity
Specifies an existing connected SharePoint 2013 content database to one of the two parameter sets in the form of a GUID or database name if it is unique.

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

### -Name
Specifies the existing content database to test.

The type must be a valid name of a SharePoint content database; for example, SPContentDB1.

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
Specifies the SharePoint Web application to use to test the content database.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or a valid name of SharePoint Web application (for example, MyOfficeApp1); or an instance of a valid SPWebApplication object.

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
If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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

### -DatabaseCredentials
Specifies the PSCredential object that contains the user name and password to be used for database SQL Server Authentication.

The type must be a valid PSCredential object.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedCheck
Checks for inconsistent authentication modes during database-attach upgrade process.

The selected mode, claims or classic, must be the same in both versions.

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

### -ServerInstance
Specifies the instance of the database service to use to test the specified content database.

The type must be a valid GUID, such as 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a SQL Server instance (for example, DBSvrInstance1); or an instance of a valid SPDatabaseServiceInstance object.

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

### -ShowLocation
Specifies the locations where missing templates and features are being used within the database.
Typically, reported locations are scoped within the site collections that are within the specified content database.

The use of the parameter significantly increases the time to complete the test procedure.

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

### -ShowRowCounts
Returns database statistics which are row counts for tables in the content database.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

