---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019
title: Set-SPEnterpriseSearchAdministrationComponent
schema: 2.0.0
---

# Set-SPEnterpriseSearchAdministrationComponent

## SYNOPSIS
Sets properties of an administration component for a search service application.


## SYNTAX

```
Set-SPEnterpriseSearchAdministrationComponent [[-Identity] <AdminComponentPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-Force]
 [-SearchApplication <SearchServiceApplicationPipeBind>]
 [-SearchServiceInstance <SearchServiceInstancePipeBind>] [-StoragePath <String>] [-WhatIf]
 [<CommonParameters>]
```

## DESCRIPTION
The Set-SPEnterpriseSearchAdministrationComponent cmdlet updates properties of an AdministrationComponent object for a search service application.

For permissions and the most current information about search cmdlets, see the online documentation, [http://go.microsoft.com/fwlink/?LinkId=163185](http://go.microsoft.com/fwlink/?LinkId=163185).


## EXAMPLES

### --------------------EXAMPLE---------------------
```
 PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication "Search Service Application" 
 PS C:\>$admin = Get-SPEnterpriseSearchAdministrationComponent -SearchApplication $ssa
 PS C:\>$admin | Set-SPEnterpriseSearchAdministrationComponent -SearchServiceInstance SP02 -Force
```

This example moves the administration component to a different server.


## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

When the Global parameter is used, all objects are contained in the global store. If objects are not immediately used, or disposed of by using the Stop-SPAssignment command, an out-of-memory scenario can occur.

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
Prompts you for confirmation before running the cmdlet.

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

### -Force
Specifies that the admin component must be moved to the new search service instance.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Specifies the administration component to update.

The type must be a valid name (GUID), such as 12345678-90ab-cdef-1234-567890bcdefgh; or an instance of a valid AdminComponent object.

```yaml
Type: AdminComponentPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -SearchApplication
Specifies the search application that contains the administration component.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid search application name (for example, SearchApp1); or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SearchServiceInstance
Specifies the search service instance to host the administration component.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a search server (for example, MyQueryServer); or an instance of a valid SearchServiceInstance object.

```yaml
Type: SearchServiceInstancePipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016, SharePoint Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -StoragePath
Specifies the path for storing data for the administration component. The path must contain a valid file share and use valid registry characters.

The type must be a valid path in either of the following forms:

- C:\folder_name

- \\\\server_name\folder_name

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

### -WhatIf
Shows what would happen if the cmdlet runs.
The cmdlet is not run.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Office.Server.Search.Cmdlet.AdminComponentPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
