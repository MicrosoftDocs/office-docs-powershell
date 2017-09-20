---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Remove-SPServiceApplicationProxy

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Deletes the specified service application proxy.



## SYNTAX

```
Remove-SPServiceApplicationProxy [-Identity] <SPServiceApplicationProxyPipeBind> [-RemoveData] [-Confirm]
 [-WhatIf] [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
The Remove-SPServiceApplicationProxy cmdlet deletes the service application proxy specified by the Identity parameter.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE----------------------- (SharePoint Server 2013)
```
C:\PS>Remove-SPServiceApplicationProxy babab30e-8e3a-428b-8ff4-4d5c8f455e6d
```

This example deletes the given service application proxy.

The service application GUID is unique to every farm.
You can run the Get-SPServiceApplication cmdlet to see the GUID of the service applications, and then use the result from the Get-SPServiceApplication cmdlet for other SPServiceApplication cmdlets; for example, Grant-SPServiceApplication or Publish-SPServiceApplication.

### ------------------EXAMPLE----------------------- (SharePoint Server 2016)
```
C:\PS>Remove-SPServiceApplicationProxy babab30e-8e3a-428b-8ff4-4d5c8f455e6d
```

This example deletes the given service application proxy.

The service application GUID is unique to every farm.
You can run the Get-SPServiceApplication cmdlet to see the GUID of the service applications, and then use the result from the Get-SPServiceApplication cmdlet for other SPServiceApplication cmdlets; for example, Grant-SPServiceApplication or Publish-SPServiceApplication.

## PARAMETERS

### -Identity
Specifies the GUID of the service application proxy to remove.

The type must be a GUID, in the form 12345678-90ab-cdef-1234-567890bcdefgh.

```yaml
Type: SPServiceApplicationProxyPipeBind
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -RemoveData
Deletes all databases and other data associated with the service application proxy.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.
For more information, type the following command: get-help about_commonparameters

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
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
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AssignmentCollection
{{Fill AssignmentCollection Description}}

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

