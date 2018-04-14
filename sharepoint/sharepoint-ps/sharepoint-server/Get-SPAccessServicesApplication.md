---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPAccessServicesApplication
schema: 2.0.0
---

# Get-SPAccessServicesApplication

## SYNOPSIS
Returns an Access Services application or a collection of Access Services applications.

## SYNTAX

```
Get-SPAccessServicesApplication [[-Identity] <SPServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The `Get-SPAccessServicesApplication` cmdlet retrieves an Access Services Service Applications. If an identity is not specified, the cmdlet returns the collection of Access Services applications that are in the farm. The properties returned from this cmdlet are read-only.

## EXAMPLES

### Example 1 
```
PS C:\>Get-SPAccessServicesApplication
```
Gets all Access Services Service Applications in the farm

### Example 2
```
PS C:\>Get-SPAccessServicesApplication -Identity 'Access Services Application'
```

Gets the Access Services Service Application named 'Access Services Application'.

## PARAMETERS

### -AssignmentCollection
Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the
objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

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

### -Identity
The identity of the Access Services Service Application. This can be in the format of a string, GUID, or a pipe bind object.

```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.SharePoint.PowerShell.SPServiceApplicationPipeBind
Microsoft.SharePoint.PowerShell.SPAssignmentCollection

## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS

