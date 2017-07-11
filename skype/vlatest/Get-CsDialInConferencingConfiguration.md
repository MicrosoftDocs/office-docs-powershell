---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsDialInConferencingConfiguration

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Retrieves information about how Microsoft Lync Server 2010 responds when users join or leave a dial-in conference.

Below Content Applies To: Lync Server 2013

Retrieves information about how Lync Server responds when users join or leave a dial-in conference.
This cmdlet was introduced in Lync Server 2010.

Below Content Applies To: Skype for Business Server 2015

Retrieves information about how Skype for Business Server 2015 responds when users join or leave a dial-in conference.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

### Identity
```
Get-CsDialInConferencingConfiguration [[-Identity] <XdsIdentity>] [-LocalStore] [<CommonParameters>]
```

### Filter
```
Get-CsDialInConferencingConfiguration [-Filter <String>] [-LocalStore] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010

When users join (or leave) a dial-in conference, Lync Server 2010 can respond in different ways.
For example, participants might be asked to record their name before they can enter the conference itself.
Likewise, administrators can decide whether they want to have Lync Server announce that dial-in participants have either left or joined a conference.

These conference "join behaviors" are managed using dial-in conferencing configuration settings; these settings can be configured at the global scope or at the site scope.
(Settings configured at the site scope take precedence over settings configured at the global scope.) The Get-CsDialInConferencingConfiguration cmdlet enables you to retrieve information about the dial-in conferencing configuration settings currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsDialInConferencingConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object  {$_.Cmdlets -match "Get-CsDialInConferencingConfiguration"}

Below Content Applies To: Lync Server 2013

When users join (or leave) a dial-in conference, Lync Server can respond in different ways.
For example, participants might be asked to record their name before they can enter the conference itself.
Likewise, administrators can decide whether they want to have Lync Server announce that dial-in participants have either left or joined a conference.

These conference "join behaviors" are managed using dial-in conferencing configuration settings; these settings can be configured at the global scope or at the site scope.
(Settings configured at the site scope take precedence over settings configured at the global scope.) The Get-CsDialInConferencingConfiguration cmdlet enables you to retrieve information about the dial-in conferencing configuration settings currently in use in your organization.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Get-CsDialInConferencingConfiguration cmdlet locally: RTCUniversalUserAdmins, RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsDialInConferencingConfiguration"}

Below Content Applies To: Skype for Business Server 2015

When users join (or leave) a dial-in conference, Skype for Business Server 2015 can respond in different ways.
For example, participants might be asked to record their name before they can enter the conference itself.
Likewise, administrators can decide whether they want to have Skype for Business Server 2015 announce that dial-in participants have either left or joined a conference.

These conference "join behaviors" are managed using dial-in conferencing configuration settings; these settings can be configured at the global scope or at the site scope.
(Settings configured at the site scope take precedence over settings configured at the global scope.) The Get-CsDialInConferencingConfiguration cmdlet enables you to retrieve information about the dial-in conferencing configuration settings currently in use in your organization.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Get-CsDialInConferencingConfiguration
```

The preceding command returns a collection of all the dial-in conferencing configuration settings currently in use in the organization.
Calling Get-CsDialInConferencingConfiguration without any additional parameters always returns the complete collection of dial-in conferencing settings.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

Example 1 returns a collection of all the dial-in conferencing configuration settings currently in use in the organization.
Calling Get-CsDialInConferencingConfiguration without any additional parameters always returns the complete collection of dial-in conferencing settings.

Get-CsDialInConferencingConfiguration

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

Example 1 returns a collection of all the dial-in conferencing configuration settings currently in use in the organization.
Calling the Get-CsDialInConferencingConfiguration cmdlet without any additional parameters always returns the complete collection of dial-in conferencing settings.

Get-CsDialInConferencingConfiguration

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsDialInConferencingConfiguration -Identity site:Redmond
```

Example 2 returns the dial-in conferencing configuration settings with the Identity site:Redmond.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns the dial-in conferencing configuration settings with the Identity site:Redmond.

Get-CsDialInConferencingConfiguration -Identity site:Redmond

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns the dial-in conferencing configuration settings with the Identity site:Redmond.

Get-CsDialInConferencingConfiguration -Identity site:Redmond

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsDialInConferencingConfiguration -Filter "site:*"
```

In Example 3, the Filter parameter is used to return all the dial-in conferencing settings that have been configured at the site scope.
The filter value "site:*" instructs Get-CsDialInConferencingConfiguration to return only those settings where the Identity begins with the string value "site:".
By design, any dial-conferencing settings that have an Identity beginning with "site:" represent settings configured at the site scope.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, the Filter parameter is used to return all the dial-in conferencing settings that have been configured at the site scope.
The filter value "site:*" instructs Get-CsDialInConferencingConfiguration to return only those settings where the Identity begins with the string value "site:".
By design, any dial-conferencing settings that have an Identity beginning with "site:" represent settings configured at the site scope.

Get-CsDialInConferencingConfiguration -Filter "site:*"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, the Filter parameter is used to return all the dial-in conferencing settings that have been configured at the site scope.
The filter value "site:*" instructs the Get-CsDialInConferencingConfiguration cmdlet to return only those settings where the Identity begins with the string value "site:".
By design, any dial-conferencing settings that have an Identity beginning with "site:" represent settings configured at the site scope.

Get-CsDialInConferencingConfiguration -Filter "site:*"

### -------------------------- Example 4 ------------------------ (Lync Server 2010)
```
Get-CsDialInConferencingConfiguration | Where-Object {$_.EnableNameRecording -eq $False}
```

The preceding command uses the Get-CsDialInConferencingConfiguration cmdlet and the Where-Object cmdlet to return a collection of all the dial-in conferencing configuration settings where the EnableNameRecording property is set to False.
To do this, Get-CsDialInConferencingConfiguration is called without any parameters in order to return a collection of all the dial-in conferencing settings.
That collection is then piped to Where-Object, which picks out only those settings where the EnableNameRecording property is equal to False.

### -------------------------- EXAMPLE 4 -------------------------- (Lync Server 2013)
```

```

Example 4 uses the Get-CsDialInConferencingConfiguration cmdlet and the Where-Object cmdlet to return a collection of all the dial-in conferencing configuration settings where the EnableNameRecording property is set to False.
To do this, Get-CsDialInConferencingConfiguration is called without any parameters in order to return a collection of all the dial-in conferencing settings.
That collection is then piped to Where-Object, which picks out only those settings where the EnableNameRecording property is equal to False.

Get-CsDialInConferencingConfiguration | Where-Object {$_.EnableNameRecording -eq $False}

### -------------------------- EXAMPLE 4 -------------------------- (Skype for Business Server 2015)
```

```

Example 4 uses the Get-CsDialInConferencingConfiguration cmdlet and the Where-Object cmdlet to return a collection of all the dial-in conferencing configuration settings where the EnableNameRecording property is set to False.
To do this, the Get-CsDialInConferencingConfiguration cmdlet is called without any parameters in order to return a collection of all the dial-in conferencing settings.
That collection is then piped to the Where-Object cmdlet, which picks out only those settings where the EnableNameRecording property is equal to False.

Get-CsDialInConferencingConfiguration | Where-Object {$_.EnableNameRecording -eq $False}

## PARAMETERS

### -Identity
Below Content Applies To: Lync Server 2010, Lync Server 2013

Indicates the Identity of the dial-in conferencing configuration settings to be retrieved.
To refer to the global settings, use this syntax: -Identity global.
To refer to site settings, use syntax similar to this: -Identity site:Redmond.
You cannot use wildcards when specifying an Identity.
To do that, use the Filter parameter instead.

If called without any parameters Get-CsDialInConferencingConfiguration returns information about all the dial-in conferencing configuration settings in use in your organization.



Below Content Applies To: Skype for Business Server 2015

Indicates the Identity of the dial-in conferencing configuration settings to be retrieved.
To refer to the global settings, use this syntax: -Identity global.
To refer to site settings, use syntax similar to this: -Identity site:Redmond.
You cannot use wildcards when specifying an Identity.
To do that, use the Filter parameter instead.

If called without any parameters the Get-CsDialInConferencingConfiguration cmdlet returns information about all the dial-in conferencing configuration settings in use in your organization.



```yaml
Type: XdsIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Provides a way for you to use wildcard characters when specifying dial-in conferencing configuration settings.
For example, to return a collection of all the configuration settings that have been applied at the site scope use this syntax: -Filter "site:*".
To return all the settings that have the term "EMEA" in their Identity use this syntax: -Filter "*EMEA*".
Note that the Filter parameter acts only on the Identity of the settings; you cannot filter on other dial-in conferencing configuration properties.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the dial-in conferencing data from the local replica of the Central Management store rather than from the Central Management store itself.

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

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

###  
None.
Get-CsDialInConferencingConfiguration does not accept pipelined input.

###  
None.
The Get-CsDialInConferencingConfiguration cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsDialInConferencingConfiguration returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingConfiguration object.

###  
The Get-CsDialInConferencingConfiguration cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.DialInConferencingSettings.DialInConferencingConfiguration object.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/75a959f7-5712-4dbc-b7ac-5a15b9b2f404(OCS.14).aspx)

[New-CsDialInConferencingConfiguration]()

[Remove-CsDialInConferencingConfiguration]()

[Set-CsDialInConferencingConfiguration]()

[Online Version](http://technet.microsoft.com/EN-US/library/75a959f7-5712-4dbc-b7ac-5a15b9b2f404(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/75a959f7-5712-4dbc-b7ac-5a15b9b2f404(OCS.16).aspx)

