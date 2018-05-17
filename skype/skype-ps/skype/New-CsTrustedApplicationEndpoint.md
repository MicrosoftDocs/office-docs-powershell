---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: New-CsTrustedApplicationEndpoint
schema: 2.0.0
---

# New-CsTrustedApplicationEndpoint

## SYNOPSIS
Creates a new endpoint contact for a trusted application.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
New-CsTrustedApplicationEndpoint -ApplicationId <String> -TrustedApplicationPoolFqdn <Fqdn>
 [-SipAddress <String>] [-DisplayName <String>] [-DisplayNumber <String>] [-LineURI <String>]
 [-PrimaryLanguage <String>]
 [-SecondaryLanguages <Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]>]
 [-Tenant <Guid>] [-PassThru] [-WhatIf] [-Confirm] [<CommonParameters>]
```

## DESCRIPTION
A trusted application endpoint is an Active Directory contact object that enables routing of calls to a trusted application.
This cmdlet creates a new endpoint contact object in Active Directory Domain Services for a specified application.


## EXAMPLES

### -------------------------- Example 1 ------------------------
```
New-CsTrustedApplicationEndpoint -ApplicationId tapp1 -TrustedApplicationPoolFqdn TrustPool.litwareinc.com
```

This example creates a trusted application endpoint for the application with the Application ID tapp1 homed on the pool TrustPool.litwareinc.com.
ApplicationID and TrustedApplicationPoolFqdn are the only parameters that are required to create a trusted application endpoint.
However, keep in mind that assigning values to only these two parameters will auto-generate a SIP address for the contact.
In order to ensure the SIP address is unique, the auto-generated address will include a globally unique identifier (GUID) and will look something like this: sip:RtcApplication-fbf9e2d1-c6aa-45a3-a045-b92d4ef961b2@litwareinc.com.
If you'd like a more readable SIP address, see Example 2.


### -------------------------- Example 2 ------------------------
```
New-CsTrustedApplicationEndpoint -ApplicationId tapp1 -TrustedApplicationPoolFqdn TrustPool.litwareinc.com -SipAddress sip:endpoint1@litwareinc.com
```

Example 2 is identical to Example 1 in that it creates a trusted application endpoint for the application with the Application ID tapp1 on the TrustPool.litwareinc.com pool.
Unlike Example 1, we include one more parameter in our endpoint creation: SipAddress.
Rather than allowing the system to generate a SIP address, we've specified an address of endpoint1@litwareinc.com.


## PARAMETERS

### -ApplicationId
The application ID of the trusted application for which the endpoint contact is being created.
An application with this ID must already exist.
Note that you may include only the name part of the application ID, you don't need to (but you can) include the prefix information.
For example, if the application ID is urn:application:TrustedApp1 you only need to pass the string TrustedApp1 to this parameter.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TrustedApplicationPoolFqdn
The fully qualified domain name (FQDN) of the trusted application pool associated with the application.
The application must already be associated with this pool for the endpoint to be created.

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -SipAddress
A SIP address for the new contact object.
If you do not include a value for this parameter a SIP address will be auto-generated in the format sip:RtcApplication-\<GUID\>.\<domain\>, for example sip:RtcApplication-fbf9e2d1-c6aa-45a3-a045-b92d4ef961b2@litwareinc.com.
The domain will be the default SIP domain.

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

### -DisplayName
The display name of the endpoint contact object.

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

### -DisplayNumber
The telephone number of the contact as it will appear in the Address Book.

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

### -LineURI
The phone number of the contact.
Must be in the format TEL:\<number\>, for example TEL:+14255551212.

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

### -PrimaryLanguage
The primary language used for the trusted application.
The language must be configured using a valid language code, such as en-US (U.S.
English), fr-FR (French), etc.

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

### -SecondaryLanguages
A collection of languages that can also be used for trusted applications.
Values must be configured as a comma-separated values list of language codes.
For example, the following syntax sets French Canadian and French as secondary languages: `-SecondaryLanguages "fr-CA","fr-FR"`.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.MultiValuedProperty`1[System.String]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account for which the new trusted application pool endpoint is being created.
For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`


```yaml
Type: Guid
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -PassThru
Returns the results of this command.
Running this cmdlet will display the newly created object; including this parameter will simply repeat that output, making the use of this parameter redundant.

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
None.

## OUTPUTS

###  
Creates an object of type Microsoft.Rtc.Management.ADConnect.Schema.OCSADApplicationContact.

## NOTES

## RELATED LINKS

[Remove-CsTrustedApplicationEndpoint](Remove-CsTrustedApplicationEndpoint.md)

[Set-CsTrustedApplicationEndpoint](Set-CsTrustedApplicationEndpoint.md)

[Get-CsTrustedApplicationEndpoint](Get-CsTrustedApplicationEndpoint.md)

