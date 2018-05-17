---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsWebServer
schema: 2.0.0
---

# Set-CsWebServer

## SYNOPSIS
Modifies one or more of the Web Server services used by Skype for Business Server.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Set-CsWebServer [[-Identity] <XdsGlobalRelativeIdentity>] [-AppSharingPortCount <UInt16>]
 [-AppSharingPortStart <UInt16>] [-ExternalFqdn <Fqdn>] [-ExternalHttpPort <UInt16>]
 [-ExternalHttpsPort <UInt16>] [-PrimaryHttpPort <UInt16>] [-PrimaryHttpsPort <UInt16>]
 [-ReachExternalPsomServerPort <UInt16>] [-ReachPrimaryPsomServerPort <UInt16>] [-UserServer <String>] [-Force]
 [-WhatIf] [-Confirm] [-InternalFqdn <Fqdn>] [-PublishedExternalHttpPort <UInt16>]
 [-PublishedExternalHttpsPort <UInt16>] [-PublishedPrimaryHttpPort <UInt16>]
 [-PublishedPrimaryHttpsPort <UInt16>] [-McxSipExternalListeningPort <UInt16>]
 [-McxSipPrimaryListeningPort <UInt16>] [-RmWebSipExternalListeningPort <UInt16>]
 [-RmWebSipPrimaryListeningPort <UInt16>] [-SupportConferenceConsoleSipExternalListeningPort <UInt16>]
 [-SupportConferenceConsoleSipPrimaryListeningPort <UInt16>] [-UcwaSipExternalListeningPort <UInt16>]
 [-UcwaSipPrimaryListeningPort <UInt16>] [-MeetingRoomAdminPortalExternalListeningPort <UInt16>]
 [-MeetingRoomAdminPortalInternalListeningPort <UInt16>] [-UcapSipPrimaryListeningPort <UInt16>]
 [-VxmlSipPrimaryListeningPort <UInt16>] [<CommonParameters>]
```

## DESCRIPTION
Skype for Business Server makes extensive use of Web servers and web services.
For example, Address Book queries can be conducted using web services (the Address Book Query Web service).
Skype for Business Server also hosts webpages that enable users to do such things as configure their dial-in conferencing personal identification number (PINs).
Considering the important role played by Web servers and web services, it is critical that administrators know how these servers and services are configured.
That information that can be returned using the following command:

`Get-CsService -WebServer`

There are also times where it is critical that administrators be able to change the way their Web servers are configured.
For example, you might need to modify the port used for external HTTP or HTTPS connections.
Port changes like these (and other modifications) can be made using the `Set-CsWebServer` cmdlet.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
Set-CsWebServer -Identity "WebServer:atl-cs-001.litwareinc.com" -PrimaryHttpPort 89
```

The command shown in Example 1 changes the PrimaryHttpPort for a single Web Service pool: the pool with the Identity WebServer:atl-cs-001.litwareinc.com.
In this example, the port is changed to port number 89.


### -------------------------- Example 2 ------------------------
```
Get-CsService -WebServer | ForEach-Object {Set-CsWebServer -Identity $_.Identity -PrimaryHttpPort 89}
```

The command shown in Example 2 is a variation of the command shown in Example 1.
In this case, the PrimaryHttpPort is modified for all the Web Service pools in the organization.
To do this, the command starts off by using the `Get-CsService` cmdlet and the WebServer parameter to return a collection of all the Web Services pools currently in use.
This collection is then piped to the `ForEach-Object` cmdlet, which takes each pool in the collection and sets the PrimaryHttpPort to port 89.
The data must be piped to the `ForEach-Object` cmdlet because the `Set-CsWebServer` cmdlet cannot accept pipelined data itself.


## PARAMETERS

### -Identity
Unique identifier for the Web Services pool.
For example:

`-Identity "WebServer:atl-cs-001.litwareinc.com"`

Note that you can leave off the prefix "WebServer:" when specifying a Web server.
For example:

`-Identity "atl-cs-001.litwareinc.com"`


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
Total number of ports allocated for application sharing.
The actual ports to be opened will start with the value configured for AppSharingPortStart and continue through the number of ports specified for AppSharingPortCount.
For example, if the AppSharingPortStart is set to 60000 and the AppSharingPortCount is set to 100 then ports 60000 through 60099 will be used for application sharing.
The default value is 16383.

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
First port in the range of ports allocated for application sharing.
The default value is 49152.

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

### -ExternalFqdn
Fully qualified domain name (FQDN) used by people connecting to the Web Services pool from outside the internal network.
For example:

`-ExternalFqdn "www.litwareinc.com"`


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExternalHttpPort
Port number for external web connections made using the HTTP protocol.
The default value is port 8080.

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

### -ExternalHttpsPort
Port number for external web connections made using the HTTPS protocol.
The default value is port 4443.

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

### -PrimaryHttpPort
Port number for internal web connections made using the HTTP protocol.
The default value is port 80.

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

### -PrimaryHttpsPort
Port number for internal web connections made using the HTTPS protocol.
The default value is port 443.

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

### -ReachExternalPsomServerPort
External port number for the Persistent Shared Object Model Protocol, a Microsoft protocol used for conferences.
The default port number is 8061.

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

### -ReachPrimaryPsomServerPort
Primary port number for the Persistent Shared Object Model (PSOM) Protocol, a Microsoft protocol used for conferences.
The default port number is 8060.

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

### -UserServer
Service ID for the User Services pool associated with the Web Services pool.
For example:

`-UserServer "UserServer:atl-cs-001.litwareinc.com"`


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

### -Force
Suppresses the display of any non-fatal error message that might arise when running the command.

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

### -InternalFqdn
Fully qualified domain name for the Mobility Services.
The InternalFqdn should only be accessible from inside the organization's firewall.


```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PublishedExternalHttpPort
Port number for the published external HTTP port.


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

### -PublishedExternalHttpsPort
External port for the Mobility service.


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

### -PublishedPrimaryHttpPort
Port number for the published primary HTTP port.


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

### -PublishedPrimaryHttpsPort
Internal port for the Mobility service.


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

### -McxSipExternalListeningPort
External listening port for the Mobility service.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -McxSipPrimaryListeningPort
Internal listening port for the Mobility service.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RmWebSipExternalListeningPort
External listening port for the Persistent Chat Room Management Web App.
This application is available only if you have installed and configured Persistent Chat.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RmWebSipPrimaryListeningPort
Primary listening port for the Persistent Chat Room Management Web App.
This application is available only if you have installed and configured Persistent Chat.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SupportConferenceConsoleSipExternalListeningPort
Listening port for the Support Conferencing Console.
The default value is 6007.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SupportConferenceConsoleSipPrimaryListeningPort
Port used by the Office 365 Support Conference Console.
This console is used by support personnel to troubleshoot problems with conferences and online meetings.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UcwaSipExternalListeningPort
External SIP listening port for the Unified Communications Web API (UCWA).
The default value is 5088.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UcwaSipPrimaryListeningPort
Internal SIP listening port for the Unified Communications Web API (UCWA).
The default value is 5089.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MeetingRoomAdminPortalExternalListeningPort
External listening port for the Skype for Business Meeting Room Admin Portal.
The Admin Portal is a web-based utility that makes it easy for administrator to manage meeting rooms.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MeetingRoomAdminPortalInternalListeningPort
Internal listening port for the Skype for Business Meeting Room Admin Portal.
The Admin Portal is a web-based utility that makes it easy for administrator to manage meeting rooms.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UcapSipPrimaryListeningPort
Primary listening port for the UCAP (Unified Communication Application Platform).

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VxmlSipPrimaryListeningPort
This parameter is not currently used with Skype for Business Server.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases: 
Applicable: Skype for Business Server 2015, Skype for Business Server 2019

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
The `Set-CsWebServer` cmdlet does not accept pipelined input.

## OUTPUTS

###  
None.
Instead, the `Set-CsWebServer` cmdlet modifies instances of the Microsoft.Rtc.Management.Xds.DisplayWebServer object.

## NOTES

## RELATED LINKS

[Get-CsService](Get-CsService.md)

