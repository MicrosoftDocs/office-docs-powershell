---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsDirector
schema: 2.0.0
---

# Set-CsDirector

## SYNOPSIS
Modifies the properties of one or more Directors.
Directors can be used to authenticate user requests, but do not host user accounts.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsDirector [[-Identity] <XdsGlobalRelativeIdentity>] [-ArchivingServer <String>] [-EdgeServer <String>]
 [-MonitoringServer <String>] [-SipPort <UInt16>] [-WebPort <UInt16>] [-WebServer <String>] [-Force] [-WhatIf]
 [-Confirm] [-SipHealthPort <UInt16>] [-SipServerTcpPort <UInt16>] [-MirrorMonitoringDatabase <String>]
 [-MonitoringDatabase <String>] [<CommonParameters>]
```

## DESCRIPTION
The Director authenticates users and responds to user requests without actually hosting user accounts.
Directors are typically used for organizations that allow external access to the network through Edge Servers.
In that scenario, Directors not only help alleviate the strain on Front End Servers (by handling authentication requests), but also help shield the internal network from denial-of-service attacks and other malicious traffic.
Directors are also useful any time multiple Front End Servers are deployed in a central site.
In that case, Directors receive all user requests and then channel those requests to the appropriate server pool.
This, again, helps to ease the burden placed on the Front End Servers.

The `Set-CsDirector` cmdlet enables you to modify the property values for any of the Directors currently in use in your organization.
This includes changing such things as the Archiving Server or Edge Server associated with the Director, or changing the port used for sending and receiving SIP traffic.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsDirector -Identity "Director:atl-cs-001.litwareinc.com" -ArchivingServer "ArchivingServer:dublin-cs-001.litwareinc.com"
```

The command shown in Example 1 changes the Archiving Server associated with the Director Director:atl-cs-001.litwareinc.com.
In this example, the Archiving Server is switched to ArchivingServer:dublin-cs-001.litwareinc.com.


### -------------------------- Example 2 ------------------------
```
Get-CsService -Director | ForEach-Object {Set-CsDirector -Identity $_.Identity -SipPort 5072}
```

Example 2 changes the SIP port for all the Directors currently in use in the organization.
To do this, the command first uses the `Get-CsService` cmdlet and the Director parameter to return a collection of all the Directors in the organization.
That collection is then piped to the `ForEach-Object`.
In turn, the `ForEach-Object` cmdlet runs the `Set-CsDirector` cmdlet against each site in the collection, changing the value of the SipPort property to 5072.


## PARAMETERS

### -Identity
Service location of the Director to be modified.
For example: `-Identity "Director:atl-cs-001.litwareinc.com"`.

Note that you can leave off the prefix "Director:" when specifying a Director.
For example: `-Identity "atl-cs-001.litwareinc.com"`.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ArchivingServer
Service location of the Archiving Server to be associated with the Director.
For example: `-ArchivingServer "ArchivingServer:atl-cs-001.litwareinc.com"`.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EdgeServer
Service location of the Edge Server to be associated with the Director.
For example: `-EdgeServer "EdgeServer:atl-edge-001.litwareinc.com"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringServer
Service location of the Monitoring Server to be associated with the Director.
For example: `-MonitoringServer "MonitoringServer:atl-cs-001.litwareinc.com"`.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipPort
Port used for Session Initiation Protocol (SIP) traffic.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebPort
Port used for communicating with Web Services.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WebServer
Web Services location of the server to be associated with the Director.
For example: `-WebServer "WebServer:atl-cs-001.litwareinc.com"`

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force
Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

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
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipHealthPort
Port used for monitoring server health.


```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipServerTcpPort
SIP listening port.
The default value is 5060.


```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MirrorMonitoringDatabase
Service location of the mirror monitoring database to be associated with the Director.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MonitoringDatabase
Service location of the monitoring database to be associated with the Director.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

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
None.
The `Set-CsDirector` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Set-CsDirector` cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.Xds.DisplayDirector object.

## NOTES

## RELATED LINKS

[Get-CsService]()
