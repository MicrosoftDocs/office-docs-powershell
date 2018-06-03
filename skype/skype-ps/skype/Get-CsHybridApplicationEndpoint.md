---
external help file:Microsoft.Rtc.Management.dll-help.xml
applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
title: Get-CsHybridApplicationEndpoint
schema: 2.0.0
---

# Get-CsHybridApplicationEndpoint

## SYNOPSIS
Returns information about one or more hybrid application endpoints in your organization along with their settings.

This cmdlet was introduced in the July 2017 cumulative update for the Lync Server 2013 and May 2017 cumulative update for Skype Business Server 2015.

## SYNTAX
```
Get-CsHybridApplicationEndpoint [-Filter <String>] [-LdapFilter <String>] [-OU <OUIdParameter>]
 [-DomainController <Fqdn>] [-Credential <PSCredential>] [[-Identity] <UserIdParameter>]
 [-ResultSize <Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]>] [<CommonParameters>]
```

## DESCRIPTION
This cmdlet returns information about one or more hybrid application endpoints in your organization along with their settings. Some of this settings are SipAddress, DisplayName and LineURI.

The `Get-CsHybridApplicationEndpoint` cmdlet provides numerous ways for you to filter the collection of endpoints actually returned when you run the cmdlet. For example, if you don't want to return all your Skype for Business Server endpoints you can apply the optional parameters Filter or LdapFilter. (These parameters are mutually exclusive: if you use Filter in a command you cannot use LdapFilter in that same command, and vice-versa.) The Filter parameter enables you to limit the returned data to endpoints who meet the specified Skype for Business Server criteria; for example, you might decide to return only enabled endpoints, or only endpoints with a LineURI assigned. The LdapFilter parameter enables you to limit the returned data to users who fit other Active Directory-based criteria.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CsHybridApplicationEndpoint 
```

This example displays all the hybrid application endpoints that have been defined for an organization along with the settings for each.

### -------------------------- Example 2 --------------------------
```
PS C:\> Get-CsHybridApplicationEndpoint -Identity "CN={4f6c99fe-7999-4088-ac4d-e88e0b3d3820},OU=Redmond,DC=litwareinc,DC=com"
```

This example uses the Identity parameter to retrieve the hybrid application endpoint settings for a specific endpoint.

### -------------------------- Example 3 --------------------------
```
PS C:\> Get-CsHybridApplicationEndpoint -Filter {Enabled -eq $true}
```

This example uses the Filter parameter to retrieve all the enabled hybrid application endpoints along with the configuration for each one.

## PARAMETERS

### -Credential
Enables you to run the Get-CsHybridApplicationEndpoint cmdlet under alternate credentials. This might be required if the account you used to log on to the Windows does not have the necessary privileges required to work with user objects.

To use the Credential parameter you must first create a PSCredential object by using the [Get-Credential](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/get-credential?view=powershell-6) cmdlet. For details, see the Get-Credential cmdlet help topic.

```yaml
Type: PSCredential
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -DomainController
Enables you to connect to the specified domain controller in order to retrieve user information. To connect to a particular domain controller, include the DomainController parameter followed by the fully qualified domain name (FQDN) (for example, atl-cs-001.litwareinc.com).

```yaml
Type: Fqdn
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Filter
Enables you to limit the returned data by filtering on Skype for Business Server 2015-specific attributes. For example, you can limit returned data to enabled endpoints.

The Filter parameter uses the same Windows PowerShell filtering syntax that is used by the Where-Object cmdlet. For example, a filter that returns only enabled endpoints would look like this, with Enabled representing the Active Directory attribute, -eq representing the comparison operator (equal to), and $True (a built-in Windows PowerShell variable) representing the filter value:

{Enabled -eq $True}

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

### -Identity
Unique application Id for the endpoint you want to get.

```yaml
Type: UserIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: 0
Default value: None
Accept pipeline input: True (ByPropertyName, ByValue)
Accept wildcard characters: False
```

### -LdapFilter
Enables you to limit the returned data by filtering on generic Active Directory attributes (that is, attributes that are not specific to Skype for Business Server 2015). For example, you can limit returned data to endpoints which work in a specific department, or endpoints which have a specified manager or job title.

The LdapFilter parameter uses the LDAP query language when creating filters. For example, a filter that returns only endpoints which belongs in the city of Redmond would look like this: "l=Redmond", with "l" (a lowercase L) representing the Active Directory attribute (locality); "=" representing the comparison operator (equal to); and "Redmond" representing the filter value.

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

### -OU
Enables you to return information about endpoints in a specific organizational unit (OU) or container. The OU parameter returns data from both the specified OU and any of its child OUs. For example, if the Finance OU has two child OUs--AccountsPayable and AccountsReceivable--endpoints will be returned from each of these three OUs.

When specifying an OU, use the distinguished name (DN) of that container; for example: -OU "OU=Finance,dc=litwareinc,dc=com". To return endpoints accounts from the Users container, use this syntax:

-OU "cn=Users,dc=litwareinc,dc=com"

```yaml
Type: OUIdParameter
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ResultSize
Enables you to limit the number of records returned by the cmdlet. For example, to return seven endpoints (regardless of the number of endpoints that are in your forest) include the ResultSize parameter and set the parameter value to 7. Note that there is no way to guarantee which seven endpoints will be returned.

The result size can be set to any whole number between 0 and 2147483647, inclusive. If set to 0 the command will run, but no data will be returned. If you set the ResultSize to 7 but you have only three endpoints in your forest, the command will return those three endpoints, and then complete without error.

```yaml
Type: Microsoft.Rtc.Management.ADConnect.Core.Unlimited`1[System.UInt32]
Parameter Sets: (All)
Aliases:
Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable.
For more information, see about_CommonParameters (http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### Microsoft.Rtc.Management.AD.UserIdParameter


## OUTPUTS

### System.Object

## NOTES

## RELATED LINKS
[New-CsHybridApplicationEndpoint](https://docs.microsoft.com/en-us/powershell/module/skype/new-cshybridapplicationendpoint?view=skype-ps)

[Set-CsHybridApplicationEndpoint](https://docs.microsoft.com/en-us/powershell/module/skype/set-cshybridapplicationendpoint?view=skype-ps)

[Remove-CsHybridApplicationEndpoint](https://docs.microsoft.com/en-us/powershell/module/skype/remove-cshybridapplicationendpoint?view=skype-ps)
