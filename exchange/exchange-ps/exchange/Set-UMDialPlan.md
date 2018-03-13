---
applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online
schema: 2.0.0
---

# Set-UMDialPlan

## SYNOPSIS
This cmdlet is available in on-premises Exchange and in the cloud-based service. Some parameters and settings may be exclusive to one environment or the other.

Use the Set-UMDialplan cmdlet to set various properties on a Unified Messaging (UM) dial plan.

For information about the parameter sets in the Syntax section below, see Exchange cmdlet syntax (https://technet.microsoft.com/library/bb123552.aspx).

## SYNTAX

```
Set-UMDialPlan [-Identity] <UMDialPlanIdParameter> [-AccessTelephoneNumbers <MultiValuedProperty>]
 [-AllowDialPlanSubscribers <$true | $false>] [-AllowedInCountryOrRegionGroups <MultiValuedProperty>]
 [-AllowedInternationalGroups <MultiValuedProperty>] [-AllowExtensions <$true | $false>]
 [-AllowHeuristicADCallingLineIdResolution <$true | $false>] [-AudioCodec <G711 | Wma | Gsm | Mp3>]
 [-AutomaticSpeechRecognitionEnabled <$true | $false>] [-CallAnsweringRulesEnabled <$true | $false>]
 [-CallSomeoneEnabled <$true | $false>] [-ConfiguredInCountryOrRegionGroups <MultiValuedProperty>]
 [-ConfiguredInternationalGroups <MultiValuedProperty>] [-Confirm]
 [-ContactAddressList <AddressListIdParameter>] [-ContactRecipientContainer <OrganizationalUnitIdParameter>]
 [-ContactScope <DialPlan | GlobalAddressList | Extension | AutoAttendantLink | AddressList>]
 [-CountryOrRegionCode <String>] [-DefaultLanguage <UMLanguage>] [-DefaultOutboundCallingLineId <String>]
 [-DialByNamePrimary <LastFirst | FirstLast | SMTPAddress>]
 [-DialByNameSecondary <LastFirst | FirstLast | SMTPAddress | None>] [-DomainController <Fqdn>]
 [-EquivalentDialPlanPhoneContexts <MultiValuedProperty>] [-Extension <String>] [-FaxEnabled <$true | $false>]
 [-ForceUpgrade] [-InCountryOrRegionNumberFormat <NumberFormat>]
 [-InfoAnnouncementEnabled <True | False | Uninterruptible>] [-InfoAnnouncementFilename <String>]
 [-InputFailuresBeforeDisconnect <Int32>] [-InternationalAccessCode <String>]
 [-InternationalNumberFormat <NumberFormat>] [-LegacyPromptPublishingPoint <String>]
 [-LogonFailuresBeforeDisconnect <Int32>]
 [-MatchedNameSelectionMethod <Title | Department | Location | None | PromptForAlias>]
 [-MaxCallDuration <Int32>] [-MaxRecordingDuration <Int32>] [-Name <String>] [-NationalNumberPrefix <String>]
 [-NumberingPlanFormats <MultiValuedProperty>] [-OperatorExtension <String>] [-OutsideLineAccessCode <String>]
 [-PilotIdentifierList <MultiValuedProperty>] [-RecordingIdleTimeout <Int32>]
 [-SendVoiceMsgEnabled <$true | $false>] [-TUIPromptEditingEnabled <$true | $false>]
 [-UMAutoAttendant <UMAutoAttendantIdParameter>] [-VoIPSecurity <SIPSecured | Unsecured | Secured>]
 [-WelcomeGreetingEnabled <$true | $false>] [-WelcomeGreetingFilename <String>] [-WhatIf] [<CommonParameters>]
```

## DESCRIPTION
The Set-UMDialplan cmdlet changes or modifies the properties of an existing UM dial plan. Some UM dial plan properties are required and are created by default. However, in some cases, after the UM dial plan is created, not all properties for the UM dial plan are writable. Therefore, some of the properties can't be changed unless the existing UM dial plan is deleted and a new one is created.

UM dial plans are important to the operation of Unified Messaging. Modifications to an existing UM dial plan should be performed by an administrator who understands the implications of changes to UM dial plans.

After this task is completed, the parameters and values specified are configured on the UM dial plan.

You need to be assigned permissions before you can run this cmdlet. Although this topic lists all parameters for the cmdlet, you may not have access to some parameters if they're not included in the permissions assigned to you. To find the permissions required to run any cmdlet or parameter in your organization, see Find the permissions required to run any Exchange cmdlet (https://technet.microsoft.com/library/mt432940.aspx).

## EXAMPLES

### Example 1
```
Set-UMDialplan -Identity MyDialPlan -OutsideLineAccessCode 9
```

This example configures the UM dial plan MyDialPlan to use 9 for the outside line access code.

### Example 2
```
Set-UMDialplan -Identity MyDialPlan -WelcomeGreetingEnabled $true -WelcomeGreetingFilename welcome.wav
```

This example configures the UM dial plan MyDialPlan to use a welcome greeting.

### Example 3
```
$csv=import-csv "C:\MyInCountryGroups.csv"; Set-UMDialPlan -Identity MyDialPlan -ConfiguredInCountryOrRegionGroups $csv; Set-UMDialPlan -Identity MyDialPlan -AllowedInCountryOrRegionGroups "local, long distance"
```

This example configures the UM dial plan MyDialPlan with dialing rules.

## PARAMETERS

### -Identity
The Identity parameter specifies the UM dial plan ID. This parameter is the directory object identifier for the UM dial plan. This parameter is used to link mailboxes and Mailbox and Client Access servers to dial plans.

```yaml
Type: UMDialPlanIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: True
Position: 1
Default value: None
Accept pipeline input: True
Accept wildcard characters: False
```

### -AccessTelephoneNumbers
The AccessTelephoneNumbers parameter specifies a single valid voice mail pilot number or a list of valid voice mail pilot numbers. This list is presented to you when a user is being enabled for Unified Messaging.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowDialPlanSubscribers
The AllowDialPlanSubscribers parameter specifies whether to allow subscribers dial numbers that resolve to a subscriber within the same dial plan. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedInCountryOrRegionGroups
The AllowedInCountryOrRegionGroups parameter specifies the list of in-country/region names from the same dial group that can be dialed. The name of the allowed in-country/region group must match the group name specified in the UM dial plan.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowedInternationalGroups
The AllowedInternationalGroups parameter specifies the list of international dial group names allowed. The international dial group name must match the group name specified in the dial plan.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowExtensions
The AllowExtensions parameter specifies whether to allow calls to dial plan extensions. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AllowHeuristicADCallingLineIdResolution
The AllowHeuristicADCallingLineIdResolution parameter specifies whether to allow calling line ID resolution using telephone number fields that may be configured in Active Directory. When this parameter is set to $true, the telephone numbers such as those defined in the Mobile or Home telephone number fields in Active Directory are used. Setting this parameter to $true allows for resolution of calling IDs for both UM-enabled and non-UM-enabled users. The default is $true. You may want to set this parameter to $false if the telephone numbers for users aren't in a standard format. If the telephone numbers aren't in a standard format, the Mailbox server may not be able to correctly resolve the caller ID to a name of a user in a consistent manner.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AudioCodec
The AudioCodec parameter specifies the audio codec used for recording. Mp3 is the default setting.

```yaml
Type: G711 | Wma | Gsm | Mp3
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -AutomaticSpeechRecognitionEnabled
The AutomaticSpeechRecognitionEnabled parameter specifies whether Automatic Speech Recognition (ASR) is enabled for users who are members of the dial plan.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallAnsweringRulesEnabled
The CallAnsweringRulesEnabled parameter specifies whether Call Answering Rules are enabled for UM-enabled users associated with the UM dial plan.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CallSomeoneEnabled
The CallSomeoneEnabled parameter specifies whether the Call Someone feature is enabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfiguredInCountryOrRegionGroups
The ConfiguredInCountryOrRegionGroups parameter specifies the in-country groups that can be used. Each string consists of four parts:

- Group name (up to 32 characters)

- AllowedNumberString

- DialNumberString

- TextComment

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ConfiguredInternationalGroups
The ConfiguredInternationalGroups parameter specifies the international groups that can be used. Each string consists of four parts:

- Group name (up to 32 characters)

- AllowedNumberString

- DialNumberString

- TextComment

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Confirm
The Confirm switch specifies whether to show or hide the confirmation prompt. How this switch affects the cmdlet depends on if the cmdlet requires confirmation before proceeding.

- Destructive cmdlets (for example, Remove-\* cmdlets) have a built-in pause that forces you to acknowledge the command before proceeding. For these cmdlets, you can skip the confirmation prompt by using this exact syntax: -Confirm:$false.

- Most other cmdlets (for example, New-\* and Set-\* cmdlets) don't have a built-in pause. For these cmdlets, specifying the Confirm switch without a value introduces a pause that forces you acknowledge the command before proceeding.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContactAddressList
The ContactAddressList parameter specifies the identity of the address list. If the ContactScope parameter is set to AddressList, this parameter defines the scope for directory searches.

```yaml
Type: AddressListIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContactRecipientContainer
The ContactRecipientContainer parameter specifies the name or identity of the container used for directory searches.

```yaml
Type: OrganizationalUnitIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ContactScope
The ContactScope parameter specifies the scope of the directory search provided to callers when they access the UM dial plan and specify a user's name.

```yaml
Type: DialPlan | GlobalAddressList | Extension | AutoAttendantLink | AddressList
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -CountryOrRegionCode
The CountryOrRegionCode parameter specifies the country or region code that precedes a telephone number used to place calls from other countries or regions to the country or region in which the UM dial plan is located. For example, 1 is the code used for North America, and 44 is the code used for the United Kingdom.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultLanguage
The DefaultLanguage parameter specifies the default language of the system. This default language is selected from the list of available languages. The default value is U.S. English.

```yaml
Type: UMLanguage
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DefaultOutboundCallingLineId
The DefaultOutboundCallingLineId parameter specifies the phone number that a Unified Messaging server would use as the calling line ID when placing an outbound call. By default, this is set to $null and only the extension number of the UM-enabled user that places the outbound call is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DialByNamePrimary
The DialByNamePrimary parameter specifies that the Dial by Name lookup key is to be created from the specified source. The default value is LastFirst.

```yaml
Type: LastFirst | FirstLast | SMTPAddress
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DialByNameSecondary
The DialByNameSecondary parameter specifies that the secondary Dial by Name lookup key is to be created from the specified source. The default value is SMTPAddress.

```yaml
Type: LastFirst | FirstLast | SMTPAddress | None
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
This parameter is available only in on-premises Exchange.

The DomainController parameter specifies the domain controller that's used by this cmdlet to read data from or write data to Active Directory. You identify the domain controller by its fully qualified domain name (FQDN). For example, dc01.contoso.com.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -EquivalentDialPlanPhoneContexts
The EquivalentDialPlanPhoneContexts parameter specifies the name of an equivalency dial plan. This parameter can be used when two UM dial plans exist but are in different forests or when a Private Branch eXchange (PBX) numbering plan spans two UM dial plans. Adding the name of the equivalency dial plan allows name lookups using a caller ID to search in the user's dial plan but then also search for a name for the calling line ID in any equivalent dial plans that are configured.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Extension
The Extension parameter specifies the extension number used by the Call Someone feature when a call is transferred.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -FaxEnabled
The FaxEnabled parameter specifies whether the Mailbox servers associated with the UM dial plan answers and processes incoming fax calls. The default value is $true.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ForceUpgrade
The ForceUpgrade switch specifies whether you're prompted for confirmation before a UM dial plan object is upgraded.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InCountryOrRegionNumberFormat
The InCountryOrRegionNumberFormat parameter specifies the prefix string to use and the number of digits to take from the directory. This number is used when dialing into this dial plan from inside the same country or region code.

```yaml
Type: NumberFormat
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InfoAnnouncementEnabled
The InfoAnnouncementEnabled parameter specifies whether an informational announcement is enabled. This parameter can be set to True, False, or Uninterruptible. The default value is False.

```yaml
Type: True | False | Uninterruptible
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InfoAnnouncementFilename
The InfoAnnouncementFilename parameter specifies the audio file name for an informational announcement.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InputFailuresBeforeDisconnect
The InputFailuresBeforeDisconnect parameter specifies the number of sequential user input errors allowed before the call is disconnected. The default value is 3.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternationalAccessCode
The InternationalAccessCode parameter specifies the code that precedes a telephone number to dial international calls. For example, 011 is the code used to call the United States.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -InternationalNumberFormat
The InternationalNumberFormat parameter specifies the prefix string to use and the number of digits to take from the directory, when dialing into this dial plan from a different country code.

```yaml
Type: NumberFormat
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LegacyPromptPublishingPoint
The LegacyPromptPublishingPoint parameter was used to specify the location of the prompt publishing point for Exchange Server 2007 Unified Messaging servers. This parameter was used in coexistence scenarios when Exchange 2007 Unified Messaging servers were also included in the UM dial plan.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LogonFailuresBeforeDisconnect
The LogonFailuresBeforeDisconnect parameter specifies the number of sequential unsuccessful logon attempts that can be made before the call is disconnected. The default value is 3.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MatchedNameSelectionMethod
The MatchedNameSelectionMethod parameter specifies the selection to use to differentiate between users who have names that match the touchtone or speech input. This setting can be set to the following:

- Title

- Department

- Location

- None

- PromptForAlias

```yaml
Type: Title | Department | Location | None | PromptForAlias
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxCallDuration
The MaxCallDuration parameter specifies the maximum length of time that a call can last before it's interrupted and the call is dropped. The default value is 30 minutes.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -MaxRecordingDuration
The MaxRecordingDuration parameter specifies the maximum length of time that messages can be recorded. This includes all kinds of calls. The default is 20 minutes. The value of this setting can be from 1 through 100. Setting this value too low can cause long voice messages to be disconnected before they are completed. Setting this value too high lets users save lengthy voice messages in their Inboxes.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Name
The Name parameter specifies the display name to use for the UM dial plan. This name is limited to 64 characters.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NationalNumberPrefix
The NationalNumberPrefix parameter specifies the dialing code that precedes a telephone number when placing calls from one local area to another within a specific country or region. For example, 1 is the code used within North America, and 0 is the code used within the United Kingdom.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -NumberingPlanFormats
The NumberingPlanFormats parameter specifies one or more phone number masks that can be used for resolving caller ID to names of users in Active Directory.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OperatorExtension
The OperatorExtension parameter specifies the extension number of the operator. If this parameter isn't specified, the Do Not Allow Transfer to the Operator feature is unavailable.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutsideLineAccessCode
The OutsideLineAccessCode parameter specifies the code that precedes a telephone number to dial an external in-country telephone number. This code is also referred to as a trunk access code. The default value is 9.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PilotIdentifierList
The PilotIdentifierList parameter specifies the pilot numbers configured on the dial plan. A single dial plan can have multiple pilot numbers. The pilot numbers must be in the E.164 format.

```yaml
Type: MultiValuedProperty
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -RecordingIdleTimeout
The RecordingIdleTimeout parameter specifies the length of time that a caller can be silent when recording a voice message before the recording is ended. The default value is 5 seconds.

```yaml
Type: Int32
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SendVoiceMsgEnabled
The SendVoiceMsgEnabled parameter specifies whether the Send Message feature is enabled.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TUIPromptEditingEnabled
The TUIPromptEditingEnabled parameter specifies whether authorized users are permitted to record UM dial plan or automated attendant prompts by using the Telephone User Interface (TUI). The default setting is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -UMAutoAttendant
The UMAutoAttendant parameter specifies the auto attendant run when the caller presses the star (\*) key. If this parameter is specified, it overrides the Call Someone feature.

```yaml
Type: UMAutoAttendantIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -VoIPSecurity
This parameter is available only in on-premises Exchange.

The VoIPSecurity parameter specifies whether the Voice over IP (VoIP) traffic is encrypted or that the signaling channel or the signaling and the media channels are encrypted by using mutual Transport Layer Security (TLS). The default setting is Unsecured.

```yaml
Type: SIPSecured | Unsecured | Secured
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WelcomeGreetingEnabled
The WelcomeGreetingEnabled parameter specifies whether a custom welcome greeting is enabled. The default value is $false.

```yaml
Type: $true | $false
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WelcomeGreetingFilename
The WelcomeGreetingFilename parameter specifies the audio file name for the welcome greeting.

```yaml
Type: String
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -WhatIf
The WhatIf switch simulates the actions of the command. You can use this switch to view the changes that would occur without actually applying those changes. You don't need to specify a value with this switch.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:
Applicable: Exchange Server 2010, Exchange Server 2013, Exchange Server 2016, Exchange Online

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/p/?LinkID=113216).

## INPUTS

###  
To see the input types that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Input Type field for a cmdlet is blank, the cmdlet doesn't accept input data.

## OUTPUTS

###  
To see the return types, which are also known as output types, that this cmdlet accepts, see Cmdlet Input and Output Types (https://go.microsoft.com/fwlink/p/?LinkId=616387). If the Output Type field is blank, the cmdlet doesn't return data.

## NOTES

## RELATED LINKS

[Online Version](https://technet.microsoft.com/library/bf6cbfde-35aa-4a03-86b0-50e2c3664eeb.aspx)
