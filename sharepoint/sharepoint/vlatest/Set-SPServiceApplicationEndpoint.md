---
external help file: sharepoint.xml
online version: 
schema: 2.0.0
---

# Set-SPServiceApplicationEndpoint

## SYNOPSIS
Below Content Applies To: SharePoint Server 2013

## SYNTAX

### UNNAMED_PARAMETER_SET_1
```
Set-SPServiceApplicationEndpoint [-Identity] <SPServiceEndpointPipeBind> -HostName <String>
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

### UNNAMED_PARAMETER_SET_2
```
Set-SPServiceApplicationEndpoint [-Identity] <SPServiceEndpointPipeBind> [-ResetHostName]
 [-AssignmentCollection <SPAssignmentCollection>] [-Confirm] [-WhatIf]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Set- SPServiceApplicationEndpoint cmdlet sets the host of a service endpoint.
Use the second parameter set to reset the host of the service endpoint to use the default endpoint.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### --------------------EXAMPLE------------------- (SharePoint Server 2013)
```
C:\PS>Set-SPServiceApplicationEndpoint -Identity "ServiceApp1" -HostName http://sitename -ResetHostName $true
```

This example associates the SPServiceEndpoint object with the specified identity and resets the hostname.

### --------------------EXAMPLE------------------- (SharePoint Server 2016)
```
C:\PS>Set-SPServiceApplicationEndpoint -Identity "ServiceApp1" -HostName http://sitename -ResetHostName $true
```

This example associates the SPServiceEndpoint object with the specified identity and resets the hostname.

## PARAMETERS

### -Identity
Specifies the service endpoint to update.

The type must be a valid GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh; a valid URI of an endpoint address, in the form http://sitename:8003/servicemodelsamples/service; or an instance of a valid SPServiceEndpoint object.

```yaml
Type: SPServiceEndpointPipeBind
Parameter Sets: (All)
Aliases: 

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -HostName
Specifies the default host of the service endpoint.

The type must be a valid full load balanced URL, in the form http://server_name.

```yaml
Type: String
Parameter Sets: UNNAMED_PARAMETER_SET_1
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResetHostName
Removes the current host of the service endpoint and uses the default host.

```yaml
Type: SwitchParameter
Parameter Sets: UNNAMED_PARAMETER_SET_2
Aliases: 

Required: True
Position: Named
Default value: False
Accept pipeline input: False
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

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Displays a message that describes the effect of the command instead of executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: False
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS

