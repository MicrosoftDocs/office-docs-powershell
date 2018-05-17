---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Set-CsNetworkBandwidthPolicyProfile
schema: 2.0.0
---

# Set-CsNetworkBandwidthPolicyProfile

## SYNOPSIS
Modifies an existing network bandwidth policy profile.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Set-CsNetworkBandwidthPolicyProfile [[-Identity] <XdsGlobalRelativeIdentity>] [-AudioBWLimit <String>]
 [-AudioBWSessionLimit <String>] [-BWPolicy <PSListModifier>] [-Description <String>] [-VideoBWLimit <String>]
 [-VideoBWSessionLimit <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

### Instance
```
Set-CsNetworkBandwidthPolicyProfile [-Instance <PSObject>] [-AudioBWLimit <String>]
 [-AudioBWSessionLimit <String>] [-BWPolicy <PSListModifier>] [-Description <String>] [-VideoBWLimit <String>]
 [-VideoBWSessionLimit <String>] [-Force] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
As part of call admission control (CAC), a bandwidth policy is used to define bandwidth limitations for certain modalities.
(In Skype for Business Server only audio and video modalities can be assigned bandwidth limitations.) This cmdlet modifies a container profile for these policies.

IMPORTANT: If a profile contains multiple policies (for example, one audio policy and one video policy), modifying the profile by using the AudioBWLimit, AudioBWSessionLimit, VideoBWLimit, or VideoBWSessionLimit properties will remove all existing policies in the profile and replace them with the new values.
If the profile contained a policy to limit video and you set only the AudioBWLimit parameter, the video policy will be removed and an audio policy created.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Set-CsNetworkBandwidthPolicyProfile -Identity LowBWProfile -Description "Policy for links of less than 10MB"
```

This example modifies the description of the bandwidth policy profile with the identity LowBWProfile.
It does this by calling the `Set-CsNetworkBandwidthPolicyProfile` cmdlet with two parameters: Identity, specifying the name of the profile to modify; and Description, specifying the new description of the profile.


### -------------------------- Example 2 --------------------------
```
Set-CsNetworkBandwidthPolicyProfile -Identity LowBWLimit -VideoBWLimit 2500 -VideoBWSessionLimit 300
```

Example 2 modifies the overall limit and session limit of video transmissions for the bandwidth policy profile with the Identity LowBWLimit.
After specifying the Identity of the profile to modify, we next use the VideoBWLimit parameter to set the overall video limit to 2500.
We then use the VideoBWSessionLimit parameter to set the individual session limit to 300.
This command will add a video profile or update an existing video profile for the LowBWLimit bandwidth policy profile.
Any existing audio profiles will be unaffected.


### -------------------------- Example 3 --------------------------
```
$bp = New-CsNetworkBWPolicy -BWLimit 5000 -BWSessionLimit 200 -BWPolicyModality video

Set-CsNetworkBandwidthPolicyProfile -Identity LowBWLimit -BWPolicy $bp
```

In this example a new bandwidth policy is created and assigned to the bandwidth policy profile with the Identity LowBWLimit.
The first line in this example is a call to the `New-CsNetworkBWPolicy` cmdlet.
This cmdlet creates a new profile, in this case a video profile (-BWPolicyModality video) with a limit of 5000 kbps (-BWLimit 5000) and a session limit of 200 kbps (-BWSessionLimit 200).
This new profile object is stored in the variable $bp.
The next line in this example calls the `Set-CsNetworkBandwidthPolicyProfile` cmdlet to modify the profile LowBWLimit (-Identity LowBWLimit).
The BWPolicy parameter is used with a value of $bp.
This replaces any existing policies of this profile with the newly created policy we stored in the $bp variable.


### -------------------------- Example 4 --------------------------
```
$a = Get-CsNetworkBandwidthPolicyProfile -Identity LowBWProfile

$ap = New-CsNetworkBWPolicy -BWLimit 2000 -BWSessionLimit 300 -BWPolicyModality audio

$a.BWPolicy.Add($ap)

Set-CsNetworkBandwidthPolicyProfile -Instance $a
```

Example 4 adds a new audio bandwidth policy to the set of existing policies in the profile LowBWProfile.
In line 1 we call the `Get-CsNetworkBandwidthPolicyProfile` cmdlet to retrieve the profile with the Identity LowBWProfile.
We store that profile in the variable $a.
In the next line we call the `New-CsNetworkBWPolicy` cmdlet to create a new bandwidth policy.
This policy is an audio policy (-BWPolicyModality audio) with a limit of 2000 kbps (-BWLimit 2000) and a session limit of 300 kbps (-BWSessionLimit 300).
This new policy is stored in variable $ap.

In line 3 we add the new audio policy (stored in $ap) to the profile we retrieved in line 1 (and stored in variable $a).
We do this by calling the Add method of the BWPolicy property of the profile, passing a value of $ap.
This can be read as "Add the new policy stored in $ap to the BWPolicy of profile LowBWProfile (stored in $a)."

Finally, we call the `Set-CsNetworkBandwidthPolicyProfile` cmdlet to update the LowBWProfile profile.
We use the Instance parameter, passing a value of $a, which contains our modified profile.


### -------------------------- Example 5 --------------------------
```
$ap = New-CsNetworkBWPolicy -BWLimit 2000 -BWSessionLimit 300 -BWPolicyModality audio

Set-CsNetworkBandwidthPolicyProfile -Identity LowBWProfile -BWPolicy @{add=$ap}
```

Example 5 is identical in functionality to Example 4: it adds a new audio policy to the existing list of policies for profile LowBWProfile.
This method requires fewer lines, but may not be quite as clear.
We've included it here simply to demonstrate that there are different ways to do the same thing.

In line 1 we create a new audio bandwidth policy, setting a bandwidth limit (2000) and a session limit (300) and storing the new object in the variable $ap.
Next we call the `Set-CsNetworkBandwidthPolicyProfile` cmdlet to modify the profile with the Identity LowBWProfile.
We use the BWPolicy parameter to modify the list of policies within the profile.
Notice the value we've passed to this parameter: @{add=$ap}.
This is simply a way in Windows PowerShell to add something to a list.
You start with the @ sign followed by a set of curly braces {}.
Within those curly braces you specify the action you want to take on the list, in this case we want to add to the list.
(You can also remove or replace.) We follow the action (add) with an equal sign, followed by the object we want to add to the list, in this case the new policy stored in variable $ap.


## PARAMETERS

### -Identity
The string value that uniquely identifies the bandwidth policy profile you want to modify.
This is identical to the BWPolicyProfileID property of the profile and can be changed by changing the value of that property.
This is equivalent to a "cut and paste" operation: all properties of the profile remain the same, only the name changes.
However, this value cannot be changed if the profile is assigned to a network site.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Instance
A reference to a bandwidth policy profile object (an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWPolicyProfileType) that contains the settings you want to use to modify the profile.
This object can be retrieved by calling the `Get-CsNetworkBandwidthPolicyProfile` cmdlet.

```yaml
Type: PSObject
Parameter Sets: Instance
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -AudioBWLimit
The maximum amount of bandwidth to allocate for all audio connections.
If a single audio session will cause the audio bandwidth limit to be exceeded, that session will not be allowed to start.

Expressed in kbps.
For example, a value of 1000 would signify 1000 kbps.

If you supply a value to this parameter, you cannot supply a value to the BWPolicy parameter.

Default: If you supply a value to the AudioBWSessionLimit parameter but not to AudioBWLimit, AudioBWLimit will default to 0.

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

### -AudioBWSessionLimit
The maximum amount of bandwidth to allocate per audio session.
Expressed in kbps.
Value must be 40 or higher.

If you supply a value to this parameter, you cannot supply a value to the BWPolicy parameter.

Default: If you supply a value to the AudioBWLimit parameter but not to AudioBWSessionLimit, AudioBWSessionLimit will default to 175.

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

### -BWPolicy
A list of objects containing bandwidth policy profiles.
Each object in the list consists of a bandwidth modality (audio or video), a bandwidth limitation, and a bandwidth session limitation.

If you supply a value to this parameter, you cannot supply a value to the AudioBWLimit, AudioBWSessionLimit, VideoBWLimit, or VideoBWSessionLimit parameter.

Objects in the list must be of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWPolicyType.
Objects of this type can be created by calling the `New-CsNetworkBWPolicy` cmdlet and the resulting policy can then be added to the profile by assigning it as the value to this parameter.

```yaml
Type: PSListModifier
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Description
A description of the bandwidth policy profile.
For example, you can use this parameter to clarify the expected use of the profile.

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

### -VideoBWLimit
The maximum amount of bandwidth to allocate for all video connections.
If a single video session will cause the video bandwidth limit to be exceeded, that session will not be allowed to start.

Expressed in kbps.
For example, a value of 1000 would signify 1000 kbps.

If you supply a value to this parameter, you cannot supply a value to the BWPolicy parameter.

Default: If you supply a value to the VideoBWSessionLimit parameter but not to VideoBWLimit, VideoBWLimit will default to 0.

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

### -VideoBWSessionLimit
The maximum amount of bandwidth to allocate per video session.
Expressed in kbps.
Value must be 100 or higher.

If you supply a value to this parameter, you cannot supply a value to the BWPolicy parameter.

Default: If you supply a value to the VideoBWLimit parameter but not to VideoBWSessionLimit, VideoBWSessionLimit will default to 700.

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
Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWPolicyProfileType object.
Accepts pipelined input of network bandwidth policy profile objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.WritableConfig.Settings.NetworkConfiguration.BWPolicyProfileType.

## NOTES

## RELATED LINKS

[New-CsNetworkBandwidthPolicyProfile](New-CsNetworkBandwidthPolicyProfile.md)

[Remove-CsNetworkBandwidthPolicyProfile](Remove-CsNetworkBandwidthPolicyProfile.md)

[Get-CsNetworkBandwidthPolicyProfile](Get-CsNetworkBandwidthPolicyProfile.md)

[New-CsNetworkBWPolicy](New-CsNetworkBWPolicy.md)

