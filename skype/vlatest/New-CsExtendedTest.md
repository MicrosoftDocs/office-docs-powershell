---
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# New-CsExtendedTest

## SYNOPSIS
Below Content Applies To: Lync Server 2013

Creates a PSTN or an Audio Conferencing Provider test that can then be assigned to a watcher node configuration.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Microsoft Lync Server 2013 Preview synthetic transactions to verify that Lync Server components are working as expected.
This cmdlet was introduced in Lync Server 2013 Preview.

Below Content Applies To: Skype for Business Server 2015

Creates a PSTN or an Audio Conferencing Provider test that can then be assigned to a watcher node configuration.
Watcher nodes are computers that periodically use Microsoft System Center Operations Manager and Skype for Business Server 2015 synthetic transactions to verify that Skype for Business Server 2015 components are working as expected.
This cmdlet was introduced in Lync Server 2013.



## SYNTAX

```
New-CsExtendedTest -Name <String> -TestType <TestType> [-TestUsers <PSListModifier>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2013

If you are using Microsoft System Center Operations Manager to monitor Lync Server 2013 Preview then you have the option of setting up "watcher nodes": computers that periodically, and automatically, run synthetic transactions in order to verify that Lync Server is working as expected.
Watcher nodes are assigned to pools, and are managed using the CsWatcherNodeConfiguration cmdlets.
Note that you do not need to install watcher nodes if you are using System Center Operations Manager.
You can still monitor your system without using watcher nodes; the only difference is that any synthetic transactions you want to run will need to be invoked manually rather than automatically invoked by Operations Manager.

When you configure a watcher node, you have the option of adding a PSTN or an Audio Conferencing Provider test as an "extended test"; these extended tests can be used instead of or in addition to the standard set of tests run by a watcher node computer.
Extended tests must be created using the New-CsExtendedTest cmdlet and then added to the appropriate watcher node.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "New-CsExtendedTest"}

Lync Server Control Panel: The functions carried out by the New-CsExtendedTest cmdlet are not available in the Lync Server Control Panel.

Below Content Applies To: Skype for Business Server 2015

If you are using Microsoft System Center Operations Manager to monitor Skype for Business Server 2015 then you have the option of setting up "watcher nodes": computers that periodically, and automatically, run synthetic transactions in order to verify that Skype for Business Server 2015 is working as expected.
Watcher nodes are assigned to pools, and are managed using the CsWatcherNodeConfiguration cmdlets.
Note that you do not need to install watcher nodes if you are using System Center Operations Manager.
You can still monitor your system without using watcher nodes; the only difference is that any synthetic transactions you want to run will need to be invoked manually rather than automatically invoked by Operations Manager.

When you configure a watcher node, you have the option of adding a PSTN or an Audio Conferencing Provider test as an "extended test"; these extended tests can be used instead of or in addition to the standard set of tests run by a watcher node computer.
Extended tests must be created using the New-CsExtendedTest cmdlet and then added to the appropriate watcher node.

Skype for Business Server Control Panel: The functions carried out by the New-CsExtendedTest cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The commands shown in Example 1 create a new extended test (with the TestType of PSTN), then adds that extended test to a new watcher node for the pool atl-cs-001.litwareinc.com.
In the first command in the example, New-CsExtendedTest is used to create an extended test named PSTN Test; this test includes the test users sip:kenmyer@litwareinc.com and sip:pilar@litwareinc.com.
(Note that these two test users must have already been configured using the Set-CsTestUserCredential cmdlet.) The resulting extended test object is then stored in a variable named $x.

In the second command, the new extended test is added to the newly-created watcher node for atl-cs-001.litwareinc.com.
This is done by using the ExtendedTests parameter and the syntax @{Add=$x}.

$x = New-CsExtendedTest -TestUsers "sip:kenmyer@litwareinc.com", "sip:pilar@litwareinc.com" -Name "PSTN Test" -TestType "PSTN"

New-CsWatcherNodeConfiguration -TargetFqdn "atl-cs-001.litwareinc.com" -PortNumber 5061 -TestUsers "sip:kenmyer@litwareinc.com","sip:pilar@litwareinc.com" -ExtendedTests @{Add=$x}

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The commands shown in Example 1 create a new extended test (with the TestType of PSTN), then adds that extended test to a new watcher node for the pool atl-cs-001.litwareinc.com.
In the first command in the example, the New-CsExtendedTest cmdlet is used to create an extended test named PSTN Test; this test includes the test users sip:kenmyer@litwareinc.com and sip:pilar@litwareinc.com.
(Note that these two test users must have already been configured using the Set-CsTestUserCredential cmdlet.) The resulting extended test object is then stored in a variable named $x.

In the second command, the new extended test is added to the newly-created watcher node for atl-cs-001.litwareinc.com.
This is done by using the ExtendedTests parameter and the syntax @{Add=$x}.

$x = New-CsExtendedTest -TestUsers "sip:kenmyer@litwareinc.com", "sip:pilar@litwareinc.com" -Name "PSTN Test" -TestType "PSTN"

New-CsWatcherNodeConfiguration -TargetFqdn "atl-cs-001.litwareinc.com" -PortNumber 5061 -TestUsers "sip:kenmyer@litwareinc.com","sip:pilar@litwareinc.com" -ExtendedTests @{Add=$x}

## PARAMETERS

### -Name
Friendly name to be given to the extended test.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestType
Type of testing to be carried out by the extended test.
Allowed values are:

* PSTN
* AudioConferencingProvider

You can only specify a single TestType per extended test.

```yaml
Type: TestType
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TestUsers
SIP address of the user account(s) that will serve as test users.
Multiple accounts can be specified by separating those accounts using commas; for example:

-TestUsers "sip:kenmyer@litwareinc.com", "sip:pilar@litwareinc.com"

You must specify at least two test users when using the PSTN TestType.

```yaml
Type: PSListModifier
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
New-CsExtendedTest does not accept pipelined input

###  
None.
The New-CsExtendedTest cmdlet does not accept pipelined input

## OUTPUTS

###  
New-CsExtendedTest creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.ExtendedTest object.

###  
The New-CsExtendedTest cmdlet creates new instances of the Microsoft.Rtc.Management.WritableConfig.Settings.WatcherNode.ExtendedTest object.

## NOTES

## RELATED LINKS

[New-CsWatcherNodeConfiguration]()

[Set-CsWatcherNodeConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/d4756daa-a4ce-4d74-926b-89754cf7e0b2(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d4756daa-a4ce-4d74-926b-89754cf7e0b2(OCS.16).aspx)

