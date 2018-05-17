---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsWatcherNodeConfiguration
schema: 2.0.0
---

# Set-CsWatcherNodeConfiguration

## SYNOPSIS
Modifies an existing collection of watcher node configuration settings.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Skype for Business Server synthetic transactions to verify that Skype for Business Server components are working as expected.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Identity
```
Set-CsWatcherNodeConfiguration [[-Identity] <XdsGlobalRelativeIdentity>] [-Confirm] [-Enabled <Boolean>]
 [-ExtendedTests <PSListModifier>] [-Force] [-PortNumber <UInt16>] [-Tests <PSListModifier>]
 [-TestUsers <PSListModifier>] [-UseInternalWebUrls <Boolean>] [-WhatIf]
 [-XmppTestReceiverMailAddress <String>] [-UseAutoDiscovery <Boolean>] [<CommonParameters>]
```

### Instance
```
Set-CsWatcherNodeConfiguration [-Confirm] [-Enabled <Boolean>] [-ExtendedTests <PSListModifier>] [-Force]
 [-Instance <PSObject>] [-PortNumber <UInt16>] [-Tests <PSListModifier>] [-TestUsers <PSListModifier>]
 [-UseInternalWebUrls <Boolean>] [-WhatIf] [-XmppTestReceiverMailAddress <String>]
 [-UseAutoDiscovery <Boolean>] [<CommonParameters>]
```

## DESCRIPTION
If you are using Microsoft System Center Operations Manager to monitor Skype for Business Server then you have the option of setting up "watcher nodes": computers that periodically and automatically, run synthetic transactions in order to verify that Skype for Business Server is working as expected.
Watcher nodes are assigned to pools, and are managed using the CsWatcherNodeConfiguration cmdlets.
Note that you do not need to install watcher nodes if you are using System Center Operations Manager.
You can still monitor your system without using watcher nodes; the only difference is that any synthetic transactions you want to run will need to be invoked manually rather than automatically invoked by Operations Manager.

Skype for Business Server Control Panel: The functions carried out by the `Set-CsWatcherNodeConfiguration` cmdlet are not available in the Skype for Business Server Control Panel.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
$x = New-CsExtendedTest -TestUsers "sip:kenmyer@litwareinc.com", "sip:pilar@litwareinc.com" -Name "Audio Conferencing Test" -TestType "AudioConferencingProvider"

Set-CsWatcherNodeConfiguration -Identity "atl-cs-001.litwareinc.com" -ExtendedTests @{Add=$x}
```

The commands shown in Example 1 add a new audio conferencing provider test to the watcher node configuration settings applied to the pool `atl-cs-001.litwareinc.com`.
To do this, the first command in the example uses the `New-CsExtendedTest` cmdlet to create the new test; this in-memory-only test is stored in a variable $x.
In the second command, the `Set-CsWatcherNodeConfiguration` cmdlet adds the new test to the watcher node configuration settings; this is done by using the ExtendedTests parameter and the syntax `@{Add=$x}`.


### -------------------------- Example 2 --------------------------
```
$x = Get-CsWatcherNodeConfiguration -Identity "atl-cs-001.litwareinc.com"

$x.ExtendedTests.RemoveAt(0)

Set-CsWatcherNodeConfiguration -Instance $x
```

The commands in Example 2 show how you can remove an extended test from a collection of watcher node configuration settings.
To carry out this task, the first command in the example uses the `Get-CsWatcherNodeConfiguration` cmdlet to return an object reference to the watcher node settings for the pool `atl-cs-001.litwareinc.com`; this object reference is stored in a variable named $x.

In the second command, the RemoveAt() method is used to remove the first extended test in the object reference $x.
Extended tests are stored as items in an array, with the first item being given the index number 0, the second item being given the index number 1, and so on.
The syntax RemoveAt(0) removes the item with the index number 0: the first item in the set of extended tests.
To remove the second extended test, use the syntax `RemoveAt(1)`.

After the object reference has been updated, the final command uses the `Set-CsWatcherNodeConfiguration` cmdlet and the Instance parameter to write the changes made to the object reference back to the actual watcher node settings for the pool `atl-cs-001.litwareinc.com`.


### -------------------------- Example 3 --------------------------
```
Set-CsWatcherNodeConfiguration -Identity "atl-cs-001.litwareinc.com" -ExtendedTests $Null
```

In Example 3, all the extended tests configured for the `atl-cs-001.litwareinc.com` watcher node are removed.
This task is performed by including the ExtendedTests parameter and the parameter value $Null.


## PARAMETERS

### -Confirm
Prompts you for confirmation before executing the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: cf
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Enabled
Enables or disables the watcher node.
The default value is True ($True).

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ExtendedTests
Object reference to one or more instances of the ExtendedTest object.
These objects must be created using the `New-CsExtendedTest` cmdlet.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Fully qualified domain name of the pool associated with the watcher node configuration settings.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
Allows you to pass a reference to an object to the cmdlet rather than set individual parameter values.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -PortNumber
SIP port used by the Registrar service.

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

### -Tests
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

To enable additional tests for a watcher node use syntax similar to this:

`-Tests @{Add="ExumConnectivity","JoinLauncher","UnifiedContactStore"}`

To disable one or more tests from a watcher node use syntax like this:

`-Tests @{Remove="ABS","ABWQ"}`

To disable all the tests for a watcher node, set the value of the Tests parameter to $Null:

`-Tests $Null`


```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestUsers
SIP addresses of the test users employed by the watcher node.
To add additional test users to the node use syntax similar to this:

`-TestUsers @{Add="sip:aidan@litwareinc.com"}`

To remove a test user from the watcher node user syntax like this:

`-TestUsers @{Remove="sip:aidan@litwareinc.com"`

To replace an existing user with a new user, use the Replace method.
For example, this syntax replaces the user sip:pilar@litwareinc.com with the new user sip:aidan@litwareinc.com:

`-TestUsers @{Replace="sip:pilar@litwareinc.com","sip:aidan@litwareinc.com"}`

You must always have at least two test users per watcher node.
If you have two users and try to remove one of those users (ostensibly leaving the node with just one test user) your command will fail.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseInternalWebUrls
When set to True ($True), instructs the watcher node to use the internal Web URLs rather than the external Web URLs.
This provides a way to way to verify URL validity for users located behind the organization's firewall.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

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
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -XmppTestReceiverMailAddress
XMPP email address to be used when testing the XMPP gateway.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UseAutoDiscovery
When set to True ($True), watcher nodes will use the Autodiscover service locate the target pool.
When set the False (the default value), watcher nodes will use the pool FQDN and SRV records to locate pools.

```yaml
Type: Boolean
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
The `Set-CsWatcherNodeConfiguration` cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated object.

## OUTPUTS

###  
None.
Instead, the `Set-CsWatcherNodeConfiguration` cmdlet modifies existing instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.TargetPool#Decorated object.

## NOTES

## RELATED LINKS

[Get-CsWatcherNodeConfiguration](Get-CsWatcherNodeConfiguration.md)

[New-CsWatcherNodeConfiguration](New-CsWatcherNodeConfiguration.md)

[Remove-CsWatcherNodeConfiguration](Remove-CsWatcherNodeConfiguration.md)

[Test-CsWatcherNodeConfiguration](Test-CsWatcherNodeConfiguration.md)

