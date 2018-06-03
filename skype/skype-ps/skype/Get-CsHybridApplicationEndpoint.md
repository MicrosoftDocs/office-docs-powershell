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

The `Get-CsHybridApplicationEndpoint` cmdlet provides numerous ways for you to filter the collection of endpoints actually returned when you run the cmdlet. For example, if you don't want to return all your Skype for Business Server endpoints you can apply the optional parameters Filter or LdapFilter. (These parameters are mutually exclusive: if you use Filter in a command you cannot use LdapFilter in that same command, and vice-versa.) The Filter parameter enables you to limit the returned data to endpoints who meet the specified Skype for Business Server criteria; for example, you might decide to return only enabled endpoints, or only endpoints with a LineURI assigned. The LdapFilter parameter enables you to limit the returned data to users who fit other Active Directory-based criteria; for example, users who work in a specified state or province, users who do or do not have a pager, or users with a designated job title.

## EXAMPLES

### -------------------------- Example 1 --------------------------
```
PS C:\> Get-CsHybridApplicationEndpoint 
```

This example displays all the hybrid application endpoints that have been defined for an organization along with the settings for each.

### -------------------------- Example 2 --------------------------
```
PS C:\> Get-CsHybridApplicationEndpoint -Identity CN={4f6c99fe-7999-4088-ac4d-e88e0b3d3820},OU=Redmond,DC=litwareinc,DC=com
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
{{Fill Filter Description}}

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
{{Fill Identity Description}}

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
{{Fill LdapFilter Description}}

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
{{Fill OU Description}}

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
{{Fill ResultSize Description}}

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

