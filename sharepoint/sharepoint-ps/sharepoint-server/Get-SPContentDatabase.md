---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPContentDatabase

## SYNOPSIS

Returns one or more content databases.



## SYNTAX

### DefaultSet
```
Get-SPContentDatabase [[-Identity] <SPContentDatabasePipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [-NoStatusFilter] [<CommonParameters>]
```

### ContentDatabasesOfSite
```
Get-SPContentDatabase -Site <SPSitePipeBind> [-AssignmentCollection <SPAssignmentCollection>]
 [<CommonParameters>]
```

### AllContentDatabasesInWebApplication
```
Get-SPContentDatabase -WebApplication <SPWebApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-NoStatusFilter] [<CommonParameters>]
```

### Unattached
```
Get-SPContentDatabase [-AssignmentCollection <SPAssignmentCollection>] [-ConnectAsUnattachedDatabase]
 [-DatabaseCredentials <PSCredential>] -DatabaseName <String> -DatabaseServer <String> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPContentDatabase cmdlet returns the specified content databases.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------------EXAMPLE 1------------ 
```
C:\PS>Get-SPContentDatabase -webapplication http://sitename
```

This example returns all content databases used by the sitename Web application.

### ----------------EXAMPLE 2------------ 
```
C:\PS>Get-SPContentDatabase -site http://contoso.com
```

This example returns the content database that contains the site collection at http://contoso.com.

## PARAMETERS

### -Identity
Specifies a specific content database to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a SharePoint content database (for example, SPContentDB1); or an instance of a valid SPContentDatabase object.

```yaml
Type: SPContentDatabasePipeBind
Parameter Sets: DefaultSet
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Site
Returns the content database for the specified site collection.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URL, in the form http://server_name; or an instance of a valid SPSite object.

```yaml
Type: SPSitePipeBind
Parameter Sets: ContentDatabasesOfSite
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -WebApplication
Returns the content databases for the specified Web application.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of SharePoint Web application (for example, MyOfficeApp1); or an instance of a valid SPWebApplication object.

```yaml
Type: SPWebApplicationPipeBind
Parameter Sets: AllContentDatabasesInWebApplication
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
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

### -ConnectAsUnattachedDatabase
Specifies that only unattached databases in the farm are returned.

```yaml
Type: SwitchParameter
Parameter Sets: Unattached
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseCredentials
{{Fill DatabaseCredentials Description}}

```yaml
Type: PSCredential
Parameter Sets: Unattached
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseName
{{Fill DatabaseName Description}}

```yaml
Type: String
Parameter Sets: Unattached
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DatabaseServer
{{Fill DatabaseServer Description}}

```yaml
Type: String
Parameter Sets: Unattached
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NoStatusFilter
{{Fill NoStatusFilter Description}}

```yaml
Type: SwitchParameter
Parameter Sets: DefaultSet, AllContentDatabasesInWebApplication
Aliases: 
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

