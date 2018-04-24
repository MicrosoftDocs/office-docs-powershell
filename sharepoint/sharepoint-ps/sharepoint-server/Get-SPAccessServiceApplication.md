---
external help file: 
applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016
title: Get-SPAccessServiceApplication
schema: 2.0.0
---

# Get-SPAccessServiceApplication

## SYNOPSIS
Returns an Access Services application or a collection of Access Services applications.

## SYNTAX

```
Get-SPAccessServiceApplication [[-Identity] <SPAccessServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPAccessServiceApplication cmdlet retrieves an Access Services application.
If an identity is not specified, the cmdlet returns the collection of Access Services applications that are in the farm.
The properties returned from this cmdlet are read-only.
If changes need to be made, use the Set-SPAccessServiceApplication cmdlet.
These changes affect all computers in the farm in which this Access Services application runs.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------EXAMPLE 1---------------- 
```
PS C:\>Get-SPAccessServiceApplication -identity "MyAccessService"
```

This example displays an Access Services application named MyAccessService.

### ------------EXAMPLE 2---------------- 
```
PS C:\>Get-SPAccessServiceApplication | where {$_.recordsintablemax -gt 10000}
```

This example displays every Access Services application that run in the farm, which allows more than 10,000 records in a table.

### ------------EXAMPLE 3---------------- 
```
PS C:\>Get-SPAccessServiceApplication
```

This example displays every Access Services application in the farm.

## PARAMETERS

### -Identity
Specifies the Access Services  application to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; or an instance of a valid SPAccessServiceApplication object.

```yaml
Type: SPAccessServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
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
Applicable: SharePoint Server 2010, SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

