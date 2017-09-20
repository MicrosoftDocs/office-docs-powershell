---
external help file: 
applicable: SharePoint Server 2013, SharePoint Server 2016
schema: 2.0.0
---

# Get-SPBusinessDataCatalogThrottleConfig

## SYNOPSIS
**Below Content Applies To:**SharePoint Server 2013

Applies to:

**Below Content Applies To:**SharePoint Server 2016

Returns the throttling configuration for a Business Data Connectivity Service application.



## SYNTAX

### FileBackedProvided
```
Get-SPBusinessDataCatalogThrottleConfig [-FileBacked] -Scope <ThrottleScope> -ThrottleType <ThrottleType>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

### ProxyProvided
```
Get-SPBusinessDataCatalogThrottleConfig -Scope <ThrottleScope>
 -ServiceApplicationProxy <SPServiceApplicationProxyPipeBind> -ThrottleType <ThrottleType>
 [-AssignmentCollection <SPAssignmentCollection>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet contains more than one parameter set.
You may only use parameters from one parameter set, and you may not combine parameters from different parameter sets.
For more information about how to use parameter sets, see Cmdlet Parameter Sets (http://go.microsoft.com/fwlink/?LinkID=187810).

The Get-SPBusinessDataCatalogThrottleConfig cmdlet reads the throttling configuration for a Business Data Connectivity Service application.

For permissions and the most current information about Windows PowerShell for SharePoint Products, see the online documentation at http://go.microsoft.com/fwlink/p/?LinkId=251831 (http://go.microsoft.com/fwlink/p/?LinkId=251831).

## EXAMPLES

### ------------------EXAMPLE------------------ (SharePoint Server 2013)
```
C:\PS>Get-SPBusinessDataCatalogThrottleConfig -Scope Database -ThrottleType Items -ServiceApplicationProxy $contosoServAppProxy
```

This example returns the throttling information that is related to database items for the given service application.

### ------------------EXAMPLE------------------ (SharePoint Server 2016)
```
C:\PS>Get-SPBusinessDataCatalogThrottleConfig -Scope Database -ThrottleType Items -ServiceApplicationProxy $contosoServAppProxy
```

This example returns the throttling information that is related to database items for the given service application.

## PARAMETERS

### -FileBacked
Requests the throttling configuration for file backed metadata catalogs.

```yaml
Type: SwitchParameter
Parameter Sets: FileBackedProvided
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Scope
Returns the throttling configuration for the specified the scope.

The type must be one of the following: Wcf, WebService, Database, Global, or Custom.

```yaml
Type: ThrottleScope
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ServiceApplicationProxy
Specifies the Business Data Connectivity Service application proxy that contains the throttling configuration to get.

```yaml
Type: SPServiceApplicationProxyPipeBind
Parameter Sets: ProxyProvided
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThrottleType
Returns the throttling configuration for the specified throttle type.

The type must be one of the following: None, Items, Size, Connections, or Timeout.

```yaml
Type: ThrottleType
Parameter Sets: (All)
Aliases: 
Applicable: SharePoint Server 2013, SharePoint Server 2016

Required: True
Position: Named
Default value: None
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

