---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Set-CsTrustedApplicationEndpoint

## SYNOPSIS
Below Content Applies To: Lync Server 2010

Modifies an existing endpoint contact for a trusted application.

Below Content Applies To: Lync Server 2013, Skype for Business Server 2015

Modifies an existing endpoint contact for a trusted application.
This cmdlet was introduced in Lync Server 2010.



## SYNTAX

```
Set-CsTrustedApplicationEndpoint [-Identity] <UserIdParameter> [-DisplayName <String>]
 [-DisplayNumber <String>] [-Enabled <Boolean>] [-EnabledForFederation <Boolean>]
 [-EnterpriseVoiceEnabled <Boolean>] [-LineURI <String>] [-PrimaryLanguage <String>]
 [-SecondaryLanguages <Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]>]
 [-SipAddress <String>] [-Type <String>] [-PassThru] [-WhatIf] [-Confirm]
 [-ExchangeArchivingPolicy <ExchangeArchivingPolicyOptionsEnum>] [<CommonParameters>]
```

## DESCRIPTION
Below Content Applies To: Lync Server 2010, Lync Server 2013

A trusted application endpoint is an Active Directory contact object that enables routing of calls to a trusted application.
This cmdlet modifies an existing endpoint contact object in Active Directory Domain Services (AD DS).

Who can run this cmdlet: By default, members of the following groups are authorized to run the Set-CsTrustedApplicationEndpoint cmdlet locally: RTCUniversalServerAdmins.
To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Set-CsTrustedApplicationEndpoint"}

Below Content Applies To: Skype for Business Server 2015

A trusted application endpoint is an Active Directory contact object that enables routing of calls to a trusted application.
This cmdlet modifies an existing endpoint contact object in Active Directory Domain Services.



## EXAMPLES

### -------------------------- Example 1 ------------------------ (Lync Server 2010)
```
Set-CsTrustedApplicationEndpoint -Identity "sip:endpoint1@litwareinc.com" -DisplayName "Endpoint 1"
```

This example modifies the application endpoint contact object with the SIP address endpoint1@litwareinc.com.
Notice that the Identity value begins with the string sip: followed by the SIP address.
The next parameter, DisplayName, is given a value of "Endpoint 1", which changes the display name of the contact to that value.

### -------------------------- EXAMPLE 1 -------------------------- (Lync Server 2013)
```

```

This example modifies the application endpoint contact object with the SIP address endpoint1@litwareinc.com.
Notice that the Identity value begins with the string sip: followed by the SIP address.
The next parameter, DisplayName, is given a value of "Endpoint 1", which changes the display name of the contact to that value.

Set-CsTrustedApplicationEndpoint -Identity "sip:endpoint1@litwareinc.com" -DisplayName "Endpoint 1"

### -------------------------- EXAMPLE 1 -------------------------- (Skype for Business Server 2015)
```

```

This example modifies the application endpoint contact object with the SIP address endpoint1@litwareinc.com.
Notice that the Identity value begins with the string sip: followed by the SIP address.
The next parameter, DisplayName, is given a value of "Endpoint 1", which changes the display name of the contact to that value.

Set-CsTrustedApplicationEndpoint -Identity "sip:endpoint1@litwareinc.com" -DisplayName "Endpoint 1"

### -------------------------- Example 2 ------------------------ (Lync Server 2010)
```
Get-CsTrustedApplicationEndpoint -Identity "Endpoint 1" | Set-CsTrustedApplicationEndpoint -DisplayNumber "(425)555-1212"
```

This example modifies the display number of the endpoint application with the display name Endpoint 1.
The command begins with a call to Get-CsTrustedApplicationEndpoint with an Identity of Endpoint 1.
This retrieves the endpoint contact object with that display name.
This object is then piped to the Set-CsTrustedApplicationEndpoint cmdlet, which modifies the DisplayNumber to the value, in this case, (425)555-1212.

### -------------------------- EXAMPLE 2 -------------------------- (Lync Server 2013)
```

```

This example modifies the display number of the endpoint application with the display name Endpoint 1.
The command begins with a call to Get-CsTrustedApplicationEndpoint with an Identity of Endpoint 1.
This retrieves the endpoint contact object with that display name.
This object is then piped to the Set-CsTrustedApplicationEndpoint cmdlet, which modifies the DisplayNumber to the value, in this case, (425)555-1212.

Get-CsTrustedApplicationEndpoint -Identity "Endpoint 1" | Set-CsTrustedApplicationEndpoint -DisplayNumber "(425)555-1212"

### -------------------------- EXAMPLE 2 -------------------------- (Skype for Business Server 2015)
```

```

This example modifies the display number of the endpoint application with the display name Endpoint 1.
The command begins with a call to the Get-CsTrustedApplicationEndpoint cmdlet with an Identity of Endpoint 1.
This retrieves the endpoint contact object with that display name.
This object is then piped to the Set-CsTrustedApplicationEndpoint cmdlet, which modifies the DisplayNumber to the value, in this case, (425)555-1212.

Get-CsTrustedApplicationEndpoint -Identity "Endpoint 1" | Set-CsTrustedApplicationEndpoint -DisplayNumber "(425)555-1212"

## PARAMETERS

### -Identity
The Identity (the distinguished name) or the SIP address of the application endpoint to be modified.

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

### -DisplayName
The display name of the endpoint contact object.

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
The telephone number of the contact as it will appear in the Address Book.

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

### -Enabled
Below Content Applies To: Lync Server 2010

Determines whether the contact is enabled for Lync Server 2010.

Default: True



Below Content Applies To: Lync Server 2013

Determines whether the contact is enabled for Lync Server.

Default: True



Below Content Applies To: Skype for Business Server 2015

Determines whether the contact is enabled for Skype for Business Server 2015.

Default: True



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

### -EnabledForFederation
Determines whether federated users have access to this contact.

Default: False

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
Determines whether the contact is enabled for Enterprise Voice.

Default: True

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

### -LineURI
The phone number of the contact.
Must be in the format TEL:\<number\>, for example TEL:+14255551212.

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

### -PrimaryLanguage
The primary language used for the trusted application.
The language must be configured using a valid language code, such as en-US (U.S.
English), fr-FR (French), etc.

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
A collection of languages that can also be used for trusted applications.
Values must be configured as a comma-separated values list of language codes.
For example, the following syntax sets French Canadian and French as secondary languages: -SecondaryLanguages "fr-CA","fr-FR".

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
You cannot modify the SIP address of a contact.
The SIP address is assigned when the application endpoint is created.

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
This parameter is not used with this cmdlet.

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
Including this parameter will cause the cmdlet to not only modify the contact object but will return the new object as output.

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

### -ExchangeArchivingPolicy
Indicates where the contact's instant messaging sessions are archived.
Allowed values are:

* Uninitialized
* UseLyncArchivingPolicy
* ArchivingToExchange
* NoArchiving

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
Microsoft.Rtc.Management.ADConnect.Schema.OCSADApplicationContact object.
Accepts pipelined input of trusted application endpoint objects.

## OUTPUTS

###  
This cmdlet does not return a value.
It modifies an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADApplicationContact.

## NOTES

## RELATED LINKS

[Online Version](http://technet.microsoft.com/EN-US/library/6c2713f4-8e2c-48fc-9f27-07c1d6b87a18(OCS.14).aspx)

[New-CsTrustedApplicationEndpoint]()

[Remove-CsTrustedApplicationEndpoint]()

[Get-CsTrustedApplicationEndpoint]()

[Online Version](http://technet.microsoft.com/EN-US/library/6c2713f4-8e2c-48fc-9f27-07c1d6b87a18(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/6c2713f4-8e2c-48fc-9f27-07c1d6b87a18(OCS.16).aspx)

