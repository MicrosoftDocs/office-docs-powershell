---
external help file: 
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsAudioTestServiceApplication
schema: 2.0.0
---

# Get-CsAudioTestServiceApplication

## SYNOPSIS
Enables you to return information about the Audio Test service application used in your organization.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Get-CsAudioTestServiceApplication [[-Identity] <UserIdParameter>] [-Credential <PSCredential>]
 [-Filter <String>] [-OU <OUIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [-DomainController <Fqdn>]
 [<CommonParameters>]
```

## DESCRIPTION
The Audio Test service enables Skype for Business Server users to test their voice connections before they make a voice call.
To do this, users click the Check call quality button found on the Audio Device tab of the Skype for Business Server 2015 Options dialog box.
When a user clicks this button, a call will be made to the automated audio test service.
The call will be answered and, after an introductory prompt is played, the caller will be asked to record a brief message.
That recording will then be replayed, enabling the caller to hear what he or she sounds like over the current connection.

The Audio Test service relies, in part, on Active Directory contact objects.
These objects are automatically created for you when you install Audio Bot; there is no way to manually create these objects.
However, administrators can use the Get-CsAudioTestServiceApplication cmdlet to retrieve information about the various test service contacts currently in use in the organization.
Administrators can also use the Set-CsAudioTestServiceApplication to modify the properties of these contacts.


## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsAudioTestServiceApplication
```

In Example 1, the Get-CsAudioTestServiceApplication cmdlet is called without any additional parameters in order to return a collection of all the Audio Test service contacts currently in use in the organization.

### -------------------------- Example 2 --------------------------
```
Get-CsAudioTestServiceApplication -Identity "sip:RedmondAudioTest@litwareinc.com"
```

In Example 2, a single Audio Test service contact is returned: the contact that has the Identity sip:RedmondAudioTest@litwareinc.com.

### -------------------------- Example 3 --------------------------
```
Get-CsAudioTestServiceApplication -Filter {DisplayName -like "*Redmond*"}
```

Example 3 returns all the Audio Test service contacts that have a display name that includes the string value "Redmond".
To do this, the command uses the Filter parameter and the filter value {DisplayName -like "*Redmond*"}; that filter value limits the returned data to contacts that have a display name that includes the string value "Redmond".
This command returns contacts with display names such as "Redmond Audio Test Service Contact", "Redmond Audio Bot", and "Test Contact for Redmond".


## PARAMETERS

### -Identity
SIP address of the audio test service contact.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 1
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -Credential
Enables you to run the cmdlet under alternate credentials.
This might be required if the account you used to log on to Windows does not have the necessary privileges required to work with contact objects.

To use the Credential parameter, you must first create a PSCredential object by using the Get-Credential cmdlet.
For details, see the Get-Credential cmdlet help topic.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to limit the returned data by filtering for attributes specific to Skype for Business Server.
For example, you can limit returned data to audio test contact objects that have a specific display name or use a particular language.

The Filter parameter uses the same Windows PowerShell filtering syntax used by the Where-Object cmdlet.
For example, a filter that returns only contacts that have the display name Audio Test Service Contacts would look like the following, with DisplayName representing the Active Directory attribute, -eq representing the comparison operator (equal to), and "Audio Test Service Contact" representing the filter value:

`-Filter {DisplayName -eq "Audio Test Service Contact"}`

You cannot use both the Filter and the Identity parameters in the same command.

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

### -OU
Enables you to return contacts from a specific Active Directory organizational unit (OU).
The OU parameter returns data from both the specified OU and any of its child OUs.
For example, if the Finance OU has two child OUs, such as AccountsPayable and AccountsReceivable, users will be returned from each of these three OUs.

When specifying an OU, use the distinguished name (DN) of that container; for example: -OU "OU=Finance,dc=litwareinc,dc=com".

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by a command.
For example, to return seven users (regardless of how many users are in your forest) include the ResultSize parameter and set the parameter value to 7.
Note that there is no way to guarantee which seven users will be returned.
If you set the ResultSize to 7, but you have only three users in your forest, the command will return those three users, and then complete without error.

The result size can be set to any whole number between 0 and 2147483647, inclusive.
If set to 0 the command will run, but no data will be returned.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to retrieve contact information.
To connect to a particular domain controller, include the DomainController parameter followed by the computer name (for example, atl-cs-001) or its fully qualified domain name (FQDN) (for example, atl-cs-001.litwareinc.com).

```yaml
Type: Fqdn
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

### Microsoft.Rtc.Management.ADConnect.Schema.OCSADApplicationContact


## NOTES


## RELATED LINKS

[Set-CsAudioTestServiceApplication](Set-CsAudioTestServiceApplication.md)

