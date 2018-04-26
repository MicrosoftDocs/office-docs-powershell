---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Get-SPEnterpriseSearchAdministrationComponent
schema: 2.0.0
---

# Get-SPEnterpriseSearchAdministrationComponent

## SYNOPSIS
Returns the administration component for a search service application.

## SYNTAX

```
Get-SPEnterpriseSearchAdministrationComponent [-AssignmentCollection <SPAssignmentCollection>]
 -SearchApplication <SearchServiceApplicationPipeBind> [<CommonParameters>]
```

## DESCRIPTION
The Get-SPEnterpriseSearchAdmininstrationComponent cmdlet retrieves an administration component for a search service application in order to update or delete it.

For permissions and the most current information about search cmdlets, see the online documentation, [http://go.microsoft.com/fwlink/?LinkId=163185](http://go.microsoft.com/fwlink/?LinkId=163185).

## EXAMPLES

### Example 1 
```
PS C:\>$ssa = Get-SPEnterpriseSearchServiceApplication 'Search Service Application'
PS C:\>et-SPEnterpriseSearchAdministrationComponent -SearchApplication $ssa
```

This example obtains an object reference to the administration component of a search service application named Search Service Application.

## PARAMETERS

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

### -SearchApplication
Specifies the search application that contains the administration component.

The type must be a valid name (GUID), in the form 12345678-90ab-cdef-1234-567890bcdefgh; or an instance of a valid SearchServiceApplication object.

```yaml
Type: SearchServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Office.Server.Search.Cmdlet.SearchServiceApplicationPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

