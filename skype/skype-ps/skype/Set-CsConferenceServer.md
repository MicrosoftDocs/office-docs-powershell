---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsConferenceServer
schema: 2.0.0
---

# Set-CsConferenceServer

## SYNOPSIS
Modifies the properties of an A/V Conferencing Server (also known as a Conference Server).
The Conference Server provides audio and video (A/V) capabilities to your conferences.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsConferenceServer [[-Identity] <XdsGlobalRelativeIdentity>] [-AppSharingSipPort <UInt16>]
 [-AppSharingPortCount <UInt16>] [-AppSharingPortStart <UInt16>] [-AudioPortCount <UInt16>]
 [-AudioPortStart <UInt16>] [-AudioVideoSipPort <UInt16>] [-DataPsomPort <UInt16>] [-EdgeServer <String>]
 [-ImSipPort <UInt16>] [-MeetingPsomPort <UInt16>] [-PhoneSipPort <UInt16>] [-VideoPortCount <UInt16>]
 [-VideoPortStart <UInt16>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
Conference Servers (also known as A/V Conferencing Servers) are used to provide audio and video capabilities to conferences.
In turn, the `Set-CsConferenceServer` cmdlet can be used to modify the properties of these servers; in particular, you can specify which ports are used for such things as audio traffic, video traffic and application sharing.
You can also use the `Set-CsConferenceServer` cmdlet to associate a given server with a Edge Server or Archiving Server.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsConferenceServer -Identity "ConferencingServer:atl-cs-001.litwareinc.com" -ImSipPort 5075
```

The command shown in Example 1 modifies the instant messaging SIP port for the Conference Server ConferencingServer:atl-cs-001.litwareinc.com.
In this example, the port is changed to 5075.


### -------------------------- Example 2 ------------------------
```
Get-CsService -ConferencingServer | ForEach-Object {Set-CsConferenceServer -Identity $_.Identity -ImSipPort 5075}
```

Example 2 is a variation of the command shown in Example 1; in this case, however, the instant messaging SIP port is changed for all the Conference Servers in the organization.
To do this, the command first uses the `Get-CsService` cmdlet and the ConferencingServer parameter to return a collection of all the Conferencing Servers currently in use.
That collection is then piped to the `ForEach-Object` cmdlet, which runs the `Set-CsConferenceServer` cmdlet against each server in the collection, setting the ImSipPort to 5075.


## PARAMETERS

### -Identity
Service location of the Conference Server to be modified.
For example: `-Identity "ConferencingServer:atl-cs-001.litwareinc.com"`.

Note that you can leave off the prefix "ConferencingServer:" when specifying a Conference Server.
For example: `-Identity "atl-cs-001.litwareinc.com"`.


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

### -AppSharingSipPort
SIP port used to listen for requests for application sharing.
The ports actually used for application sharing are configured using AppSharingPortStart and AppSharingPortCount.

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

### -AppSharingPortCount
Total number of ports allocated for application sharing.
The actual ports to be opened will start with the value configured for AppSharingPortStart and continue through the number of ports specified for AppSharingPortCount.
For example, if the AppSharingPortStart is set to 60000 and the AppSharingPortCount is set to 100, then ports 60000 through 60099 will be used for application sharing.

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
First port in the range of media ports allocated for application sharing.
For example: `-AppSharingPortStart 60000`.

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
Total number of ports allocated for sending and receiving audio traffic.
The actual ports to be opened will start with the value configured for AudioPortStart and continue through the number of ports specified for AudioPortCount.
For example, if the AudioPortStart is set to 60000 and the AudioPortCount is set to 100, then ports 60000 through 60099 will be used for audio traffic.

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
First port in the range of media ports allocated for sending and receiving audio traffic.
For example: `-AudioPortStart 60000`.

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

### -AudioVideoSipPort
SIP port used to listen for incoming requests for audio and video service.
The ports actually used for audio and video traffic are configured using AudioPortCount, AudioPortStart, VideoPortCount and VideoPortStart.

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

### -DataPsomPort
Data port used by the Persistent Shared Object Model (PSOM) protocol.

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

### -EdgeServer
Service location of the Edge Server to be associated with the Conference Server.
For example: `-EdgeServer "EdgeServer:atl-edge-001.litwareinc.com"`.

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

### -ImSipPort
Port used for instant messaging traffic.

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

### -MeetingPsomPort
Port used for the Persistent Shared Object Model (PSOM) protocol, a Microsoft protocol used for conferences.

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

### -PhoneSipPort
Port used for telephony traffic.

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

### -VideoPortCount
Total number of ports allocated for sending and receiving video traffic.
The actual ports to be opened will start with the value configured for VideoPortStart and continue through the number of ports specified for VideoPortCount.
For example, if the VideoPortStart is set to 60000 and the VideoPortCount is set to 100, then ports 60000 through 60099 will be used for video traffic.

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
First port in the range of ports allocated for sending and receiving video traffic.
For example: `-VideoPortStart 60000`.

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
Suppresses the display of any non-fatal error message that might occur when running the command.

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
None.
The `Set-CsConferenceServer` cmdlet does not accept pipelined input.

## OUTPUTS

###  
The `Set-CsConferenceServer` cmdlet does not return any objects or values.
Instead, the cmdlet modifies existing instances of the Microsoft.Rtc.Management.Xds.DisplayConferenceServer object.

## NOTES

## RELATED LINKS

[Get-CsConferencingConfiguration](Get-CsConferencingConfiguration.md)

[Get-CsService](Get-CsService.md)

