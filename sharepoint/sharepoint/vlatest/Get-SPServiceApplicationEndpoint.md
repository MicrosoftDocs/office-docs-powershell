---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Get-SPServiceApplicationEndpoint

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Get-SPServiceApplicationEndpoint [-Identity] <SPServiceEndpointPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>]
```

### UNNAMED_PARAMETER_SET_2
```
Get-SPServiceApplicationEndpoint -ServiceApplication <SPServiceApplicationPipeBind>
 [-AssignmentCollection <SPAssignmentCollection>] [-Name <String>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPServiceApplicationEndpoint cmdlet sets the host of a service endpoint.
Use the second parameter set and do not specify the Name parameter to return a collection of all endpoints for the specified service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### -------------------EXAMPLE-------------------- (SharePoint Server 2013)
```
C:\PS>Get- SPServiceApplicationEndpoint -ServiceApplication "ServiceSubApp1"
```

This example returns the SPServiceEndpoint object based on the specified service application.

### -------------------EXAMPLE-------------------- (SharePoint Server 2016)
```
C:\PS>Get- SPServiceApplicationEndpoint -ServiceApplication "ServiceSubApp1"
```

This example returns the SPServiceEndpoint object based on the specified service application.

## PARAMETERS

### -Identity
Specifies the service endpoint to get.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URI of an endpoint address, in the form http://sitename:8003/servicemodelsamples/service; or an instance of a valid SPServiceEndpoint object.

```yaml
Type: SPServiceEndpointPipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ServiceApplication
Specifies the service application to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid name of a subscription settings service application (for example, SubscriptionSettingsApp1); or an instance of a valid SPServiceApplication object.

```yaml
Type: SPServiceApplicationPipeBind
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

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

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -Name
Specifies the name of the service application endpoint.

The type must be a valid name of an service application endpoint; for example, SvcAppEndpoint1.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

