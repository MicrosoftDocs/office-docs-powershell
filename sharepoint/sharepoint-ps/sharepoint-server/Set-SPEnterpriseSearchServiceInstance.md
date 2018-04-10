---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Set-SPEnterpriseSearchServiceInstance
schema: 2.0.0
---

# Set-SPEnterpriseSearchServiceInstance

## SYNOPSIS
Sets the properties of a search service instance.


## SYNTAX

```
Set-SPEnterpriseSearchServiceInstance [-Identity] <SearchServiceInstancePipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-DefaultIndexLocation <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
This cmdlet updates properties of the search service instance for a farm.

    For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at Windows PowerShell for SharePoint Server 2016 reference [http://go.microsoft.com/fwlink/p/?LinkId=671715](http://go.microsoft.com/fwlink/p/?LinkId=671715).


## EXAMPLES

### --------------------EXAMPLE---------------------
```
PS C:\>$si = Get-SPEnterpriseSearchServiceInstance -Local
PS C:\>Set-SPEnterpriseSearchServiceInstance -Identity $si -DefaultIndexLocation F:\SearchIndex
```
Sets the default index location to F:\SearchIndex.

## PARAMETERS

### -Identity
Specifies the search service instance to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a query server (for example, MyQueryServer); or an instance of a valid SearchServiceInstance object.


```yaml
Type: SearchServiceInstancePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.


```yaml
Type: SPAssignmentCollection
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before running the cmdlet.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultIndexLocation
> [!NOTE]
> On SharePoint Server 2013 and SharePoint Server 2016 this parameter is obsolete and has no function. You should not use this parameter.

Specifies the default path to use for creating an index of content.

The type must be a valid path in either of the following forms:

- C:\folder_name

- \\\\server_name\folder_name


```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.


```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Office.Server.Search.Cmdlet.SearchServiceInstancePipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
