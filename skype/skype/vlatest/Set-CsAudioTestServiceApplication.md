---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsAudioTestServiceApplication

## SYNOPSIS
**Below Content Applies To:** Lync Server 2010

Enables you to modify the property values for any of the Audio Test service application contacts currently in use in your organization.

**Below Content Applies To:** Lync Server 2013, Skype for Business Server 2015

Enables you to modify the property values for any of the Audio Test service application contacts currently in use in your organization.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Set-CsAudioTestServiceApplication [-Identity] <UserIdParameter> [-Enabled <Boolean>] [-DisplayName <String>]
 [-DisplayNumber <String>] [-EnabledForFederation <Boolean>] [-EnterpriseVoiceEnabled <Boolean>]
 [-PrimaryLanguage <String>]
 [-SecondaryLanguages <Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]>]
 [-SipAddress <String>] [-Type <String>] [-PassThru] [-WhatIf] [-Confirm] [-LineURI <String>]
 [-ExchangeArchivingPolicy <ExchangeArchivingPolicyOptionsEnum>] [<CommonParameters>]
```

## DESCRIPTION
**Below Content Applies To:** Lync Server 2010

The Audio Test service enables Microsoft Lync 2010 users to test their voice connections before they make a voice call.
To do this, users click the Check call quality button found on the Audio Device tab of the Lync 2010 Options dialog box.
When a user clicks this button, a call will be made to the automated Audio Test service.
The call will be answered and, after an introductory prompt is played, the caller will be asked to record a brief message (10 seconds maximum).
That recording will then be replayed, enabling the caller to hear what he or she sounds like over the current connection.

The Audio Test service relies, in part, on Active Directory contact objects.
These objects are automatically created for you when you install Audio Bot; there is no way to manually create these objects.
However, administrators can use the Get-CsAudioTestServiceApplication cmdlet to retrieve information about the various test service contacts currently in use in the organization.
Administrators can also use the Set-CsAudioTestServiceApplication to modify the properties of these contacts.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsAudioTestServiceApplication cmdlet: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsAudioTestServiceApplication"}

**Below Content Applies To:** Lync Server 2013

The Audio Test service enables Lync Server users to test their voice connections before they make a voice call.
To do this, users click the Check call quality button found on the Audio Device tab of the Lync Options dialog box.
When a user clicks this button, a call will be made to the automated Audio Test service.
The call will be answered and, after an introductory prompt is played, the caller will be asked to record a brief message (10 seconds maximum).
That recording will then be replayed, enabling the caller to hear what he or she sounds like over the current connection.

The Audio Test service relies, in part, on Active Directory contact objects.
These objects are automatically created for you when you install Audio Bot; there is no way to manually create these objects.
However, administrators can use the Get-CsAudioTestServiceApplication cmdlet to retrieve information about the various test service contacts currently in use in the organization.
Administrators can also use the Set-CsAudioTestServiceApplication to modify the properties of these contacts.

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsAudioTestServiceApplication cmdlet: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsAudioTestServiceApplication"}

**Below Content Applies To:** Skype for Business Server 2015

The Audio Test service enables Skype for Business Server 2015 users to test their voice connections before they make a voice call.
To do this, users click the Check call quality button found on the Audio Device tab of the Skype for Business Options dialog box.
When a user clicks this button, a call will be made to the automated Audio Test service.
The call will be answered and, after an introductory prompt is played, the caller will be asked to record a brief message (10 seconds maximum).
That recording will then be replayed, enabling the caller to hear what he or she sounds like over the current connection.

The Audio Test service relies, in part, on Active Directory contact objects.
These objects are automatically created for you when you install Audio Bot; there is no way to manually create these objects.
However, administrators can use the Get-CsAudioTestServiceApplication cmdlet to retrieve information about the various test service contacts currently in use in the organization.
Administrators can also use the Set-CsAudioTestServiceApplication cmdlet to modify the properties of these contacts.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsAudioTestServiceApplication -Identity "sip:RedmondAudioTest@litwareinc.com" -PrimaryLanguage "en-US"
```

In Example 1, the primary language for the Audio Test service contact sip:RedmondAudioTest@litwareinc.com is set to U.S.
English (en-US).

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

In Example 1, the primary language for the Audio Test service contact sip:RedmondAudioTest@litwareinc.com is set to U.S.
English (en-US).

Set-CsAudioTestServiceApplication -Identity "sip:RedmondAudioTest@litwareinc.com" -PrimaryLanguage "en-US"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

In Example 1, the primary language for the Audio Test service contact sip:RedmondAudioTest@litwareinc.com is set to U.S.
English (en-US).

Set-CsAudioTestServiceApplication -Identity "sip:RedmondAudioTest@litwareinc.com" -PrimaryLanguage "en-US"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Set-CsAudioTestServiceApplication -Identity "sip:RedmondAudioTest@litwareinc.com" -PrimaryLanguage $Null
```

The preceding example clears the value of the PrimaryLanguage property for the Audio Test service contact sip:RedmondAudioTest@litwareinc.com.
This is done by including the PrimaryLanguage parameter and setting the parameter value to $Null.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

Example 2 clears the value of the PrimaryLanguage property for the Audio Test service contact sip:RedmondAudioTest@litwareinc.com.
This is done by including the PrimaryLanguage parameter and setting the parameter value to $Null.

Set-CsAudioTestServiceApplication -Identity "sip:RedmondAudioTest@litwareinc.com" -PrimaryLanguage $Null

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 clears the value of the PrimaryLanguage property for the Audio Test service contact sip:RedmondAudioTest@litwareinc.com.
This is done by including the PrimaryLanguage parameter and setting the parameter value to $Null.

Set-CsAudioTestServiceApplication -Identity "sip:RedmondAudioTest@litwareinc.com" -PrimaryLanguage $Null

### -------------------------- Example 3 ------------------------ (Lync Server 2010)
```
Get-CsAudioTestServiceApplication | Set-CsAudioTestServiceApplication -PrimaryLanguage "en-US"
```

In Example 3, all the Audio Test service contacts in use in the organization are configured to use U.S.
English as their primary language.
To do this, Get-CsAudioTestServiceApplication is first called without any parameters in order to return a collection of the Audio Test service contacts.
This collection is then piped to the Set-CsAudioTestServiceApplication, which assigns U.S.
English (en-Us) to the PrimaryLanguage property for each contact in the collection.

### -------------------------- EXAMPLE 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, all the Audio Test service contacts in use in the organization are configured to use U.S.
English as their primary language.
To do this, Get-CsAudioTestServiceApplication is first called without any parameters in order to return a collection of the Audio Test service contacts.
This collection is then piped to the Set-CsAudioTestServiceApplication, which assigns U.S.
English (en-Us) to the PrimaryLanguage property for each contact in the collection.

Get-CsAudioTestServiceApplication | Set-CsAudioTestServiceApplication -PrimaryLanguage "en-US"

### -------------------------- EXAMPLE 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, all the Audio Test service contacts in use in the organization are configured to use U.S.
English as their primary language.
To do this, the Get-CsAudioTestServiceApplication cmdlet is first called without any parameters in order to return a collection of the Audio Test service contacts.
This collection is then piped to the Set-CsAudioTestServiceApplication, which assigns U.S.
English (en-Us) to the PrimaryLanguage property for each contact in the collection.

Get-CsAudioTestServiceApplication | Set-CsAudioTestServiceApplication -PrimaryLanguage "en-US"

## PARAMETERS

### -Identity
SIP address of the audio test service contact to be modified.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: True
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Enabled
**Below Content Applies To:** Lync Server 2010

Indicates whether or not the contact object has been enabled for Lync Server 2010.
If you set this value to False ($False), the contact will no longer be able to log on to Lync Server; setting this value to True ($True) re-enables the contact's logon privileges.



**Below Content Applies To:** Lync Server 2013

Indicates whether or not the contact object has been enabled for Lync Server.
If you set this value to False ($False), the contact will no longer be able to log on to Lync Server; setting this value to True ($True) re-enables the contact's logon privileges.



**Below Content Applies To:** Skype for Business Server 2015

Indicates whether or not the contact object has been enabled for Skype for Business Server 2015.
If you set this value to False ($False), the contact will no longer be able to log on to Skype for Business Server 2015; setting this value to True ($True) re-enables the contact's logon privileges.



```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: CsEnabled
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DisplayName
Active Directory display name of the contact object.

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

### -DisplayNumber
Although a valid property, DisplayNumber is not actually used with the Audio Test service.

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

### -EnabledForFederation
Indicates whether this contact is available to users from a federated domain.
If set to False, only users within your organization will have access to the contact.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EnterpriseVoiceEnabled
Indicates whether the contact object has been enabled for Enterprise Voice, which is the Microsoft implementation of Voice over Internet Protocol (VoIP).
With Enterprise Voice, users can use make telephone calls by using the Internet rather than by using the standard telephone network.

```yaml
Type: Boolean
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PrimaryLanguage
Primary language used for the audio test service.
The language must be configured using one of the allowed language codes; for example, en-US for U.S.
English; fr-FR for French; etc.
To return a list of the available language codes, type the following command at the Windows PowerShell prompt:

Get-CsDialInConferencingLanguageList | Select-Object -ExpandProperty Languages.

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

### -SecondaryLanguages
Although a valid property, SecondaryLanguages is not actually used with the Audio Test service.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress
**Below Content Applies To:** Lync Server 2010

Unique identifier that allows the contact object to communicate by using SIP devices such as Lync 2010.
The SIP address must be prefaced by sip:; for example: -SipAddress "sip:kenmyer@litwareinc.com".



**Below Content Applies To:** Lync Server 2013

Unique identifier that allows the contact object to communicate by using SIP devices such as Lync.
The SIP address must be prefaced by sip:; for example: -SipAddress "sip:kenmyer@litwareinc.com".



**Below Content Applies To:** Skype for Business Server 2015

This parameter is currently disabled.
You cannot change the SIP address using Set-CsAudioTestServiceApplication.



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

### -Type
Indicates the type of test contact being deployed.
By default, contacts are listed as Automaton, which means they can interact with callers.

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

### -PassThru
Enables you to pass a user object through the pipeline that represents the user being assigned the policy.
By default, the Set-CsAudioTestServiceApplication cmdlet does not pass objects through the pipeline.

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

### -LineURI
Although a valid property, LineUri is not actually used with the Audio Test service.

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

### -ExchangeArchivingPolicy
**Below Content Applies To:** Lync Server 2013

Indicates where the contact's instant messaging sessions are archived.
Allowed values are:

* Uninitialized
* UseLyncArchivingPolicy
* ArchivingToExchange
* NoArchiving



**Below Content Applies To:** Skype for Business Server 2015

Indicates where the contact's instant messaging sessions are archived.
Allowed values are:

Uninitialized

UseLyncArchivingPolicy

ArchivingToExchange

NoArchiving



```yaml
Type: ExchangeArchivingPolicyOptionsEnum
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
Set-CsAudioTestServiceApplication accepts pipelined instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADApplicationContact object.

###  
The Set-CsAudioTestServiceApplication cmdlet accepts pipelined instances of the Microsoft.Rtc.Management.ADConnect.Schema.OCSADApplicationContact object.

## OUTPUTS

###  
Set-CsAudioTestServiceApplication does not return any objects or values.

###  
The Set-CsAudioTestServiceApplication cmdlet does not return any objects or values.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/d2c6880b-58df-43d1-9f26-d2b9f54d3f0b(OCS.14).aspx)

[Get-CsAudioTestServiceApplication]()

[Online Version](http://technet.microsoft.com/EN-US/library/d2c6880b-58df-43d1-9f26-d2b9f54d3f0b(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/d2c6880b-58df-43d1-9f26-d2b9f54d3f0b(OCS.16).aspx)

