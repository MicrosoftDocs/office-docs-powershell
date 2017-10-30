---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
title: Get-CsPartnerApplication
schema: 2.0.0
---

# Get-CsPartnerApplication

## SYNOPSIS
Returns information about all the partner applications configured for use in the organization.
A partner application is any application that Skype for Business Server can directly exchange security tokens with, without having to exchange those tokens by using a third-party security token server.
This cmdlet was introduced in Lync Server 2013.


## SYNTAX

### Filter
```
Get-CsPartnerApplication [-Filter <String>] [-LocalStore] [-Tenant <Guid>] [<CommonParameters>]
```

### Identity
```
Get-CsPartnerApplication [[-Identity] <XdsGlobalRelativeIdentity>] [-LocalStore] [-Tenant <Guid>]
 [<CommonParameters>]
```

## DESCRIPTION
In Skype for Business Server, server-to-server authentication (for example, the authentication that enables Skype for Business Server and Exchange to share information) is carried out using the OAuth security protocol.
This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server.
If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities.

If you are using an on-premises version of Skype for Business Server and you need to communicate with another server product that fully supports the OAuth protocol (for example, Exchange or SharePoint) then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens.
However, you will need to configure the other server product (e.g., Exchange) as a partner application.
(You will also need to configure Skype for Business Server as a partner application for the other server product.) In Skype for Business Server, partner applications are managed by using the CsPartnerApplication cmdlets.

Skype for Business Server Control Panel: The functions carried out by the Get-CsPartnerApplication cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 --------------------------
```
Get-CsPartnerApplication
```

The command shown in Example 1 returns information about all the partner applications configured for use in the organization

### -------------------------- Example 2 --------------------------
```
Get-CsPartnerApplication -Identity "MicrosoftExchange"
```

Example 2 returns information for the partner application that has the Identity MicrosoftExchange.

### -------------------------- Example 3 --------------------------
```
Get-CsPartnerApplication | Where-Object {$_.ApplicationIdentifier -eq "microsoft.exchange"}
```

In Example 3, information is returned for all the partner applications that have an application identifier equal to "microsoft.exchange." In order to do this, the command first calls the Get-CsPartnerApplication cmdlet without any parameters; that returns a collection of all the configured partner applications.
That collection is then piped to the Where-Object cmdlet, which picks out only those partner applications where the ApplicationIdentifier property is equal to "microsoft.exchange."

### -------------------------- Example 4 --------------------------
```
Get-CsPartnerApplication | Where-Object {$_.Enabled -eq $False}
```

In Example 4, information is returned for all the partner applications that are currently disabled.
To do this, the command first calls the Get-CsPartnerApplication cmdlet in order to return a collection of all the partner applications, both enabled and disabled.
That collection is then piped to the Where-Object cmdlet, which selects only those applications where the Enabled property is equal to False.


## PARAMETERS

### -Filter
Enables you to use wildcard values to return one or more partner applications.
For example, to return all the partner applications that have an Identity that includes the string value "Microsoft" use this syntax:

`-Filter "*Microsoft*"`

You cannot use both the Filter parameter and the Identity parameter in the same command.

```yaml
Type: String
Parameter Sets: Filter
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Identity
Unique identifier for the partner application.
For example:

`-Identity "MicrosoftExchange"`

If neither the identity parameter nor the Filter parameter are included in the command then the Get-CsPartnerApplication cmdlet will return information for all your partner applications.

```yaml
Type: XdsGlobalRelativeIdentity
Parameter Sets: Identity
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: 2
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -LocalStore
Retrieves the partner application data from the local replica of the Central Management store rather than from the Central Management store itself.

```yaml
Type: SwitchParameter
Parameter Sets: (All)
Aliases: 
Applicable: Lync Server 2013, Skype for Business Server 2015

Required: False
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### -Tenant
Globally unique identifier (GUID) of the Skype for Business Online tenant account where whose partner application settings are to be retrieved.

For example:

`-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"`

You can return the tenant ID for each of your tenants by running this command:

`Get-CsTenant | Select-Object DisplayName, TenantID`

```yaml
Type: Guid
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

### None


## OUTPUTS

### Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.PartnerApplication#Decorated


## NOTES


## RELATED LINKS

[New-CsPartnerApplication](New-CsPartnerApplication.md)

[Remove-CsPartnerApplication](Remove-CsPartnerApplication.md)

[Set-CsPartnerApplication](Set-CsPartnerApplication.md)
