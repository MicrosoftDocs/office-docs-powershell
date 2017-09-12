---
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPVisioServiceApplicationProxy

## SYNOPSIS
Returns properties of a Visio Services application proxy or a collection of Visio Services application proxies.

## SYNTAX

```
Get-SPVisioServiceApplicationProxy [[-Identity] <SPVisioServiceApplicationProxyPipeBind>]
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Get-SPVisioServiceApplicationProxy cmdlet reads the settings of a Visio Services application proxy.
If the Identity parameter is not specified, this cmdlet returns the collection of Visio Services application proxies on the farm.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ----------------EXAMPLE 1--------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPVisioServiceApplicationProxy
```

This example returns a list of Visio Services application proxies.

### ----------------EXAMPLE 1--------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPVisioServiceApplicationProxy
```

This example returns a list of Visio Services application proxies.

### ----------------EXAMPLE 2--------------------- (SharePoint Server 2013)
```
C:\PS>Get-SPVisioServiceApplicationProxy "Connection to VGS2"
```

This example returns settings for a Visio Services application proxy.

### ----------------EXAMPLE 2--------------------- (SharePoint Server 2016)
```
C:\PS>Get-SPVisioServiceApplicationProxy "Connection to VGS2"
```

This example returns settings for a Visio Services application proxy.

## PARAMETERS

### -Identity
Specifies the Visio Services application proxy to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a Visio Services application (for example, MyVisioService1); or an instance of a valid SPVisioServiceApplication object.

```yaml
Type: SPVisioServiceApplicationProxyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

