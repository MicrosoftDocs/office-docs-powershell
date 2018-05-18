---
external help file: Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsPstnUsage
schema: 2.0.0
---

# Get-CsPstnUsage

## SYNOPSIS
Returns information about public switched telephone network (PSTN) usage records used in your organization.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

### Identity
```
Get-CsPstnUsage [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsPstnUsage [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
PSTN usages are string values that are used for call authorization.
A PSTN usage links a voice policy to a route.
The Get-CsPstnUsage cmdlet retrieves the list of all PSTN usages available within an organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsPstnUsage cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsPstnUsage"}


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPstnUsage
```

This command returns the list of global PSTN usages available within the organization.

### -------------------------- Example 2 --------------------------
```
(Get-CsPstnUsage).Usage
```

The command in this example returns a list of all defined PSTN usages, with one usage listed on each line of output.
Calling the Get-CsPstnUsage cmdlet by itself returns the Identity and the Usage list.
If the Usage list contains more than three or four entries, the list will be abbreviated in the output, similar to this:

Usage : {Internal, Local, Long Distance, International...}

Use the command in this example to display only a list of usages.
The output will be similar to this:

Internal

Local

Long Distance

International

Restricted

### -------------------------- Example 3 --------------------------
```
(Get-CsPstnUsage).Usage | ForEach-Object {if ($_ -like "*tern*") {$_}}
```

This command returns all the PSTN usage names that have the string "tern" somewhere within the name.
For example, this command will return "Internal" and "International" but not "Local" or "Long Distance".

The first part of this command is the Get-CsPstnUsage cmdlet within parentheses, which means the first thing that happens is for all the PSTN usages to be retrieved.
The .Usage property returns only the usage information for the PSTN usages, not the Identity.
This list of usages is then piped to the ForEach-Object cmdlet, which looks at the usage strings one at a time.
The If statement compares the current usage string to the string "*tern*" (the * are wildcards) and displays any occurrence that matches that pattern.


## PARAMETERS

### -Identity
The level at which these settings are applied.
The only identity that can be applied to PSTN usages is Global.

```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
The Filter parameter allows you to retrieve only those PSTN usages with an Identity matching a particular wildcard string.
However, the only Identity available to PSTN usages is Global, so this parameter is not useful for this cmdlet.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the PSTN usage information from the local data store rather than the main Central Management store.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).


## INPUTS

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Policy.Voice.PSTNUsages


## NOTES


## RELATED LINKS

[Set-CsPstnUsage](Set-CsPstnUsage.md)

[Get-CsVoicePolicy](Get-CsVoicePolicy.md)

[Get-CsVoiceRoute](Get-CsVoiceRoute.md)

