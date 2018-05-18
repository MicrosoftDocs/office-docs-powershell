---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsTrustedApplicationPool
schema: 2.0.0
---

# Set-CsTrustedApplicationPool

## SYNOPSIS
Modifies a pool that contains the computers that host trusted applications.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsTrustedApplicationPool [[-Identity] <XdsGlobalRelativeIdentity>] [-AppSharingPortCount <UInt16>]
 [-AppSharingPortStart <UInt16>] [-AudioPortCount <UInt16>] [-AudioPortStart <UInt16>]
 [-OutboundOnly <Boolean>] [-Registrar <String>] [-RequiresReplication <Boolean>] [-ThrottleAsServer <Boolean>]
 [-TreatAsAuthenticated <Boolean>] [-VideoPortCount <UInt16>] [-VideoPortStart <UInt16>] [-Force] [-WhatIf]
 [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
We recommend that the computers that are running trusted applications within a Skype for Business Server deployment be added to a separate pool that is only for trusted applications.
However, you can add trusted application computers to an existing pool that is also used for other purposes.
The `Set-CsTrustedApplicationPool` cmdlet modifies the settings for an existing trusted application pool.
Note that you can't modify the computers that are associated with a pool by using this cmdlet; you must use the CsTrustedApplicationComputer cmdlets to do that.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsTrustedApplicationPool -Identity TrustPool.litwareinc.com -OutboundOnly $True
```

This example modifies the pool with the FQDN TrustPool.litwareinc.com.
We use the Identity parameter to specify the FQDN of the pool we want to modify.
This example modifies the OutboundOnly property of the pool by specifying a value of True ($True) for the parameter OutboundOnly.
(The default value is False.)


## PARAMETERS

### -Identity
The fully qualified domain name (FQDN) or service ID of the pool whose settings you want to modify.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppSharingPortCount
The number of ports available in the port range for application sharing connections.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AppSharingPortStart
The number of the first port in the port range available for application sharing connections.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioPortCount
The number of ports available in the port range for audio connections.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioPortStart
The number of the first port in the port range available for audio connections.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutboundOnly
Specifies whether a trusted application can initiate a connection to a server within the pool.
Set this value to True if you want all connections to be initiated by the server rather than the application.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Registrar
The service ID or FQDN of the Registrar service for the pool.
Note that changing the Registrar will orphan any contacts attached to the application.
Those contacts must be moved by calling the `Move-CsApplicationEndpoint` cmdlet.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RequiresReplication
Determines whether replication is required for this pool.
Set this value to False if replication is not required.
You would ordinarily set this parameter to False for Microsoft Outlook Web Access and manually-provisioned applications.


```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ThrottleAsServer
Set this parameter to false to throttle connections between the servers within the pool and trusted applications as clients.
This places greater restrictions on the connections than the default True, which throttles connections as servers.
Throttling a connection simply places restrictions on the number of transactions that can occur simultaneously.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TreatAsAuthenticated
Determines whether authentication is required for trusted applications connecting to servers within the pool.
Set this parameter to False if you want to require trusted applications to be authenticated.
The default value of True allows the trusted applications to connect under the assumption they've already been authenticated.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoPortCount
The number of ports available in the port range for video connections.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VideoPortStart
The number of the first port in the port range available for video connections.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses any confirmation prompts that would otherwise be displayed before making changes.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
Microsoft.Rtc.Management.Xds.DisplayExternalServer object.
Accepts pipelined input of trusted application pool objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.Xds.DisplayExternalServer.

## NOTES

## RELATED LINKS

[New-CsTrustedApplicationPool](New-CsTrustedApplicationPool.md)

[Remove-CsTrustedApplicationPool](Remove-CsTrustedApplicationPool.md)

[Get-CsTrustedApplicationPool](Get-CsTrustedApplicationPool.md)

[New-CsTrustedApplicationComputer](New-CsTrustedApplicationComputer.md)

