---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Import-SPPerformancePointContent
schema: 2.0.0
---

# Import-SPPerformancePointContent

## SYNOPSIS
Imports a Performance Point Server (PPS) dashboard.

## SYNTAX

```
Import-SPPerformancePointContent [-AssignmentCollection <SPAssignmentCollection>] -DatasourceMap <Hashtable>
 -ImportFileUrl <String> -LocationMap <Hashtable> -MasterPageUrl <String> -SiteDestination <SPWebPipeBind>
 [<CommonParameters>]
```

## DESCRIPTION
The Import-SPPerformancePointContent imports a PPS dashboard and its dependencies from a CMP file that can then be used to import to another server.

## EXAMPLES

### Example 1 
```
PS C:\>$ContentList = @{"/bi/Dashboard Content" = "/biprod/Dashboard Content"; "/bi/My Projects" = "/biprod/My Projects"}
PS C:\>$DatasourceList = @{"/bi/DataConnections/AdventureWorks.ppsdc" = "/myBi/libraries/DataConnections/AdventureWorks_prod.ppsdc"; "/bi/DataConnections/AW 2008 Cubes4.ppsdc" =     "/myBi/libraries/DataConnections/AW 2008 Cubes3.ppsdc"; "/sales/DataConnections/Excel DS.ppsdc" = "/marketing/PPS Data Sources/PDW 2010.ppsdc"}
PS C:\>Import-SPPerformancePointContent -ImportFileURL "http://contoso.com/biprod/DocumentLibrary/Dashboard1.cmp" -SiteDestination "http://contoso.com/biprod/" -LocationMap $ContentList -DatasourceMap $DatasourceList -MasterPage "marketing and sales.master"
```

This example imports a dashboard by using the $Datasourcelist and $ContentList variables.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -DatasourceMap
Maps existing or adds new data sources to destination library.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ImportFileUrl
Path and Name of the CMP file created in the export command.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocationMap
Maps the locations between source lists and destination lists.

```yaml
Type: Hashtable
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MasterPageUrl
Specifies which master page to use for imported dashboards.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SiteDestination
Specifies the site to which the dashboard will be deployed. Also used to determine the location of the import Key Performance Indicator (KPI).

```yaml
Type: SPWebPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPWebPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

