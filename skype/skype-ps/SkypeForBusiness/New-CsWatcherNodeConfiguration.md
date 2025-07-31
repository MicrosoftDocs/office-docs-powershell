---
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skype/new-cswatchernodeconfiguration
schema: 2.0.0
title: New-CsWatcherNodeConfiguration
---

# New-CsWatcherNodeConfiguration

## SYNOPSIS
Assigns a new collection of watcher node configuration settings to a pool.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Skype for Business Server synthetic transactions to verify that Skype for Business Server components are working as expected.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
New-CsWatcherNodeConfiguration [-Identity] <XdsGlobalRelativeIdentity> -PortNumber <UInt16> [-Confirm]
 [-Enabled <Boolean>] [-ExtendedTests <PSListModifier>] [-Force] [-InMemory] [-Tests <PSListModifier>]
 [-TestUsers <PSListModifier>] [-UseInternalWebUrls <Boolean>] [-WhatIf]
 [-XmppTestReceiverMailAddress <String>] [-UseAutoDiscovery <Boolean>] [<CommonParameters>]
```

### ParentAndRelativeKey
```
New-CsWatcherNodeConfiguration -PortNumber <UInt16> -TargetFqdn <String> [-Confirm] [-Enabled <Boolean>]
 [-ExtendedTests <PSListModifier>] [-Force] [-InMemory] [-Tests <PSListModifier>] [-TestUsers <PSListModifier>]
 [-UseInternalWebUrls <Boolean>] [-WhatIf] [-XmppTestReceiverMailAddress <String>]
 [-UseAutoDiscovery <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
If you are using Microsoft System Center Operations Manager to monitor Skype for Business Server then you have the option of setting up "watcher nodes": computers that periodically and automatically, run synthetic transactions in order to verify that Skype for Business Server is working as expected.
Watcher nodes are assigned to pools, and are managed using the CsWatcherNodeConfiguration cmdlets.
Note that you do not need to install watcher nodes if you are using System Center Operations Manager.
You can still monitor your system without using watcher nodes; the only difference is that any synthetic transactions you want to run will need to be invoked manually rather than automatically invoked by Operations Manager.

Skype for Business Server Control Panel: The functions carried out by the `New-CsWatcherNodeConfiguration` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### Example 1
```
Set-CsTestUserCredential -SipAddress "sip:kenmyer@litwareinc.com" -UserName "litwareinc\kenmyer" -Password "07Apples"

Set-CsTestUserCredential -SipAddress "sip:pilar@litwareinc.com" -UserName "litwareinc\pilar" -Password "07Apples"

$x = New-CsExtendedTest -TestUsers "sip:kenmyer@litwareinc.com", "sip:pilar@litwareinc.com" -Name "PSTN Test" -TestType "PSTN"

New-CsWatcherNodeConfiguration -TargetFqdn "atl-cs-001.litwareinc.com" -PortNumber 5061 -TestUsers "sip:kenmyer@litwareinc.com","sip:pilar@litwareinc.com"} -ExtendedTests @{Add=$x}
```

The commands shown in Example 1 create a new collection of watcher node configuration settings for the pool `atl-cs-001.litwareinc.com`.
To do this, the first two commands in the example create a pair watcher node test users (sip:kenmyer@litwareinc.com and sip:pilar@litwareinc.com).
After the test users have been created, the third command in the example creates a new extended PSTN test using the two newly-created users.
This new test (which, at this point in time, exists only in memory) is stored in a variable named $x.

Finally, the fourth command in the example creates the watcher node configuration settings for atl-cs-001.litwareinc.com.
These new settings use port 5061; the two new test users and the extended test stored in the variable $x.


## PARAMETERS

### -Enabled

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables or disables the watcher node.
The default value is True ($True).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedTests

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

PSTN or Audio Conferencing Provider tests that can be assigned to a watcher node configuration.
These tests must be created using the `New-CsExtendedTest` cmdlet and stored in a variable (for example, $x).
The test can then be assigned to a watcher node by using syntax similar to this:

`-ExtendedTests @{Add=$x}`

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Fully qualified domain name of the pool being associated with the watcher node configuration settings.
You can use either the Identity parameter or the TargetFqdn parameter to specify the pool; however, you cannot use both these parameters in the same command.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases:

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InMemory

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Creates an object reference without actually committing the object as a permanent change.
If you assign the output of this cmdlet called with this parameter to a variable, you can make changes to the properties of the object reference and then commit those changes by calling this cmdlet's matching Set- cmdlet.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PortNumber

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

SIP port used by the Registrar service.

```yaml
Type: UInt16
Parameter Sets: (All)
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFqdn

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Fully qualified domain name of the pool being associated with the watcher node configuration settings.
You can use either the TargetFqdn parameter or the Identity parameter to specify the pool; however, you cannot use both these parameters in the same command.

```yaml
Type: String
Parameter Sets: ParentAndRelativeKey
Aliases:

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tests

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Synthetic transactions to be run by the watcher node.
Allowed values are:

Registration

IM

GroupIM

P2PAV

AvConference

Presence

ABS

ABWQ

MCXP2PIM

ExumConnectivity

JoinLauncher

PersistentChatMessage

DataConference

XmppIM

UnifiedContactStore

AVEdgeConnectivity

To configure tests at the time you create a new watcher node, use the following syntax, separating the individual tests by using commas:

`-Tests "ABS","ABWQ","IM","GroupIM","XmppIM"`


```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestUsers

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

SIP addresses of the test users to be assigned to the watcher node; these user accounts must have previously been configured by using the `Set-CsTestUserCredential` cmdlet.
To add test users, use syntax similar to this, separating user addresses by using commas:

`-TestUsers "sip:kenmyer@litwareinc.com","sip:pilar@litwareinc.com"`

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseAutoDiscovery

> Applicable: Skype for Business Server 2015, Skype for Business Server 2019

When set to True ($True), Skype for Business Online watcher nodes will use the Autodiscover service to locate the target pool.
When set to False (the default value) watcher nodes will use SRV records to locate the pool.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseInternalWebUrls

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

When set to True ($True), instructs the watcher node to use the internal Web URLs rather than the external Web URLs.
This provides a way to way to verify URL validity for users located behind the organization's firewall.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -XmppTestReceiverMailAddress

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

XMPP email address to be used when testing the XMPP gateway.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Describes what would happen if you executed the command without actually executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: wi

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
The `New-CsWatcherNodeConfiguration` cmdlet does not accept pipelined input.

## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated
The `New-CsWatcherNodeConfiguration` cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated object.

## NOTES

## RELATED LINKS
