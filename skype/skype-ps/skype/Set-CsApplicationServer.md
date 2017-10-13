---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
title: Set-CsApplicationServer
schema: 2.0.0
---

# Set-CsApplicationServer

## SYNOPSIS
Enables you to modify configuration properties of one or more servers running the Application service.
These servers (also known as Application Servers) host software programs, such as the Call Park application, that were developed using the Microsoft Unified Communications Managed API (UCMA) set.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsApplicationServer [[-Identity] <XdsGlobalRelativeIdentity>] [-ApplicationDatabase <String>]
 [-AppSharingPortCount <UInt16>] [-AppSharingPortStart <UInt16>] [-AtsSipPort <UInt16>]
 [-AudioPortCount <UInt16>] [-AudioPortStart <UInt16>] [-CaaSipPort <UInt16>] [-CasSipPort <UInt16>]
 [-CpsSipPort <UInt16>] [-PdpSipPort <UInt16>] [-PdpTurnPort <UInt16>] [-RgsSipPort <UInt16>]
 [-RgsWcfMtlsPort <UInt16>] [-VideoPortCount <UInt16>] [-VideoPortStart <UInt16>] [-Force] [-WhatIf] [-Confirm]
 [-Registrar <String>] [<CommonParameters>]
```

## DESCRIPTION
The Application service hosts a number of Skype for Business Server programs that are not part of the core server components; these programs include the Response Group application, the Conferencing Attendant application and the Conferencing Announcement application.
The Application service takes these programs and fully integrates them into the Skype for Business Server environment.

The `Set-CsApplicationServer` cmdlet enables administrators to modify the configuration settings for any (or all) of the Application Servers deployed in their organization.
For example, you can modify the ports used for audio, video, or application sharing traffic, or assign new values to ports used by individual applications such as the Conferencing Attendant application or the Conferencing Announcement application.
Note that any time you change ports you will then need to restart the corresponding service.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsApplicationServer -Identity "ApplicationServer:atl-cs-001.litwareinc.com" -CasSipPort 5074
```

The command shown in Example 1 configures the SIP port for the Conferencing Announcement application on the Application Server ApplicationServer:atl-cs-001.litwareinc.com to 5074.


### -------------------------- Example 2 ------------------------
```
Set-CsApplicationServer -Identity "ApplicationServer:atl-cs-001.litwareinc.com" -AudioPortStart 49500 -AudioPortCount 5500
```

Example 2 configures audio ports for the Application Server ApplicationServer:atl-cs-001.litwareinc.com.
In this example, the starting audio port is set to 49500 and a total of 5500 ports are set aside for audio traffic.


### -------------------------- Example 3 ------------------------
```
Get-CsService -ApplicationServer | ForEach-Object {Set-CsApplicationServer -Identity $_.Identity -CasSipPort 5074}
```

In Example 3, the SIP port for the Conferencing Announcement application is set to 5074 for all of the Application Servers in the organization.
To do this, the command first uses the `Get-CsService` cmdlet to return a collection of all the Application Servers currently in use.
This collection is then piped to the `ForEach-Object` cmdlet, which takes each server in the collection and uses the `Set-CsApplicationServer` cmdlet to set the Conferencing Announcement application SIP port to 5074.


## PARAMETERS

### -Identity
Service location of the Application Server to be modified.
For example: `-Identity "ApplicationServer:atl-cs-001.litwareinc.com"`.

Note that you can leave off the prefix "ApplicationServer:" when specifying an Application server.
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

### -ApplicationDatabase
Service location of the Application database.
For example: `-ApplicationDatabase "ApplicationDatabase:atl-cs-001.litwareinc.com"`.

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

### -AppSharingPortCount
Total number of ports allocated for application sharing.
The actual ports to be opened will start with the value configured for AppSharingPortStart and continue through the number of ports specified for AppSharingPortCount.
For example, if the AppSharingPortStart is set to 60000 and the AppSharingPortCount is set to 100 then ports 60000 through 60099 will be used for application sharing.

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

### -AppSharingPortStart
First port in the range of ports allocated for application sharing.
For example: `-AppSharingPortStart 60000`.

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

### -AtsSipPort
Port used for the Audio Test service.

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

### -AudioPortCount
Total number of ports allocated for sending and receiving audio traffic.
The actual ports to be opened will start with the value configured for AudioPortStart and continue through the number of ports specified for AudioPortCount.
For example, if the AudioPortStart is set to 60000 and the AudioPortCount is set to 100, then ports 60000 through 60099 will be used for audio traffic.

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

### -AudioPortStart
First port in the range of ports allocated for sending and receiving audio traffic.
For example: `-AudioPortStart 60000`.

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

### -CaaSipPort
SIP port used by the Conferencing Attendant application, used when connecting users to a dial-in conference.

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

### -CasSipPort
SIP port used by the Conferencing Announcement application, used to play announcements (for example, "Ken Myer is now exiting") during a conference.

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

### -CpsSipPort
SIP port used by the Call Park service.
The Call Park service enables you to place a call on hold from one telephone, then have that call retrieved from a different phone.

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

### -PdpSipPort
SIP port used by the Policy Decision Point Server.
The Policy Decision Point Server is used for bandwidth management.

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

### -PdpTurnPort
Turn traffic port used by the Policy Decision Point Server.

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

### -RgsSipPort
SIP port used by the Response Group application.
The Response Group application provides a way to direct incoming phone calls to a specific group of people, such as an organization's support team.

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

### -RgsWcfMtlsPort
Port used for Windows Communication Foundation (WCF) mutual TLS (MTLS) traffic used by the Response Group application.

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

### -VideoPortCount
Total number of ports allocated for sending and receiving video traffic.
The actual ports to be opened will start with the value configured for VideoPortStart and continue through the number of ports specified for VideoPortCount.
For example, if the VideoPortStart is set to 60000 and the VideoPortCount is set to 100, then ports 60000 through 60099 will be used for video traffic.

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

### -VideoPortStart
First port in the range of ports allocated for sending and receiving video traffic.
For example `-VideoPortStart 60000`.

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

### -Registrar
Fully qualified domain name of the Registrar associated with the Policy Decision Point Server.


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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
The `Set-CsApplicationServer` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Set-CsApplicationServer` cmdlet does not return any values or objects.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.Xds.DisplayApplicationServer object.

## NOTES

## RELATED LINKS

[Get-CsServerApplication](Get-CsServerApplication.md)
