---
applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019
author: hirenshah1
external help file: Microsoft.Rtc.Management.dll-help.xml
Locale: en-US
manager: rogupta
Module Name: SkypeForBusiness
ms.author: hirshah
online version: https://learn.microsoft.com/powershell/module/skypeforbusiness/test-csfederatedpartner
schema: 2.0.0
title: Test-CsFederatedPartner
---

# Test-CsFederatedPartner

## SYNOPSIS
Verifies the ability to connect to a federated domain.
This cmdlet was introduced in Lync Server 2010.


## SYNTAX

```
Test-CsFederatedPartner [-TargetFqdn] <String> [-Domain] <String> [-Certificate <X509Certificate2>]
 [-ProxyFqdn <String>] [-Force] [-Verbose] [-OutVerboseVariable <String>] [-OutLoggerVariable <String>]
 [<CommonParameters>]
```

## DESCRIPTION
`Test-CsFederatedPartner` verifies your ability to connect to the domain of a federated partner.
In order to verify the connectivity to a domain, that domain must be listed in the collection of allowed (federated) domains.
Domains can be added to the allowed list by using the `New-CsAllowedDomain` cmdlet.
When using this cmdlet, make sure that the TargetFqdn parameter points to the internal Edge Server FQDN to which federated SIP traffic is directed.


## EXAMPLES

### Example 1
```
Test-CsFederatedPartner -TargetFqdn accessproxy.litwareinc.com -Domain fabrikam.com
```

The command shown in Example 1 verifies the connection between the local access proxy server (accessproxy.litwareinc.com) and the federated domain Fabrikam.com.
Note that TargetFqdn must point to the internal Edge Server FQDN to which federated SIP traffic is directed.


### Example 2
```
Test-CsFederatedPartner -TargetFqdn accessproxy.litwareinc.com -Domain push.lync.com -ProxyFqdn sipfed.online.lync.com
```

Example 2 shows how you can test the connection between your domain and the Lync Server Push Notification Service.
You must have configured this service as a hosting provider and must have added push.lync.com to your list of allowed domains for this test to succeed.
For more information, see Configuring for push notifications in Lync Server 2013.


### Example 3
```
Get-CsAllowedDomain | ForEach-Object {Test-CsFederatedPartner -TargetFqdn accessproxy.litwareinc.com -Domain $_.Identity}
```

In Example 3, connectivity is verified for all the domains on your allowed domains list.
To do this, the command first uses the `Get-CsAllowedDomain` cmdlet to retrieve a collection of all your allowed domains.
That collection is then piped to the `ForEach-Object` cmdlet.
In turn, `ForEach-Object` runs the `Test-CsFederatedPartner` cmdlet against each domain in the collection.


## PARAMETERS

### -Certificate

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Enables you to provide an X509 certificate for authentication purposes when connecting to the federated domain.

```yaml
Type: X509Certificate2
Parameter Sets: (All)
Aliases: ce

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Domain

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Fully qualified domain name (FQDN) of the federated domain.
For example: `-Domain "fabrikam.com"`.

```yaml
Type: String
Parameter Sets: (All)
Aliases: d

Required: True
Position: 3
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Force

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

Suppresses the display of any non-fatal error message that might occur when running the command.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases:

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutLoggerVariable

> Applicable: Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

When present, detailed output from running the cmdlet will be stored in the specified variable.
This variable includes a pair of methods - ToHTML and ToXML - that can then be used to save that output to either an HTML or an XML file.

To store output in a logger variable named $TestOutput use the following syntax:

`-OutLoggerVariable TestOutput`

Note: Do not use prepend a $ character when specifying the variable name. To save the information stored in the logger variable to an HTML file, use a command similar to this:

`$TestOutput.ToHTML() \> C:\Logs\TestOutput.html`

To save the information stored in the logger variable to an XML file, use a command similar to this:

`$TestOutput.ToXML() \> C:\Logs\TestOutput.xml`

```yaml
Type: String
Parameter Sets: (All)
Aliases: olv

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -OutVerboseVariable

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

When present, detailed output from running the cmdlet will be stored in the specified variable.
For example, to store output in a variable named $TestOutput use the following syntax:

`-OutVerboseVariable TestOutput`

Do not prepend a $ character when specifying the variable name.


```yaml
Type: String
Parameter Sets: (All)
Aliases: ovv

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -ProxyFqdn

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

FQDN of the access proxy server used by the federated organization.

```yaml
Type: String
Parameter Sets: (All)
Aliases: pe

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -TargetFqdn

> Applicable: Lync Server 2010, Lync Server 2013, Skype for Business Server 2015, Skype for Business Server 2019

FQDN of the access proxy server used by your organization for federated SIP traffic.
The TargetFqdn must point to the internal Edge Server FQDN to which federated SIP traffic is directed.

```yaml
Type: String
Parameter Sets: (All)
Aliases: t

Required: True
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see about_CommonParameters (https://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### None
`Test-CsFederatedPartner` does not accept pipelined input.

## OUTPUTS

### Microsoft.Rtc.SyntheticTransactions.TaskOutput
`Test-CsFederatedPartner` returns an instance of the Microsoft.Rtc.SyntheticTransactions.TaskOutput object.

## NOTES

## RELATED LINKS

[Get-CsAllowedDomain](Get-CsAllowedDomain.md)
