---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
title: Get-SPAccessServicesApplication
schema: 2.0.0
---

# Get-SPAccessServicesApplication

## SYNOPSIS

Gets an Access Services Service Application.


## SYNTAX

```
Get-SPAccessServicesApplication [[-Identity] <SPServiceApplicationPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION

Returns Access Services service applications available in the farm.


## EXAMPLES

### Example 1 
```

PS C:\>$sa = Get-SPServiceApplication| ?{$_.TypeName -eq 'Access Services Web Service Application'}
PS C:\>Get-SPAccessServicesApplication -Identity $sa

```
Returns the Access Services application using a service application pipebind.

### Example 2 
```
PS C:\>Get-SPAccessServicesApplication -Identity 0d1da6e4-5cd6-4ccf-9ae1-ace2e964223a
```

Returns the Access Services application with the specified GUID.


## PARAMETERS

### -AssignmentCollection

Manages objects for the purpose of proper disposal. Use of objects, such as SPWeb or SPSite, can use large amounts of memory and use of these objects in Windows PowerShell scripts requires proper memory management. Using the SPAssignment object, you can assign objects to a variable and dispose of the objects after they are needed to free up memory. When SPWeb, SPSite, or SPSiteAdministration objects are used, the objects are automatically disposed of if an assignment collection or the Global parameter is not used.

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

Must be in the form of a Service Application pipe bind or a GUID.


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

