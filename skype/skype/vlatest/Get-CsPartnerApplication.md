---
external help file: 
applicable: Lync Server 2013, Skype for Business Server 2015
schema: 2.0.0
---

# Get-CsPartnerApplication

## SYNOPSIS
**Below Content Applies To:** Lync Server 2013

Returns information about all the partner applications configured for use in the organization.
A partner application is any application that Microsoft Lync Server 2013 Preview can directly exchange security tokens with, without having to exchange those tokens by using a third-party security token server.
This cmdlet was introduced in Lync Server 2013 Preview.

**Below Content Applies To:** Skype for Business Server 2015

Returns information about all the partner applications configured for use in the organization.
A partner application is any application that Skype for Business Server 2015 can directly exchange security tokens with, without having to exchange those tokens by using a third-party security token server.
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
**Below Content Applies To:** Lync Server 2013

In Microsoft Lync Server 2013 Preview, server-to-server authentication (for example, the authentication that enables Lync Server 2013 Preview and Microsoft Exchange Server 2013 Preview to share information) is carried out using the OAuth security protocol.
This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server.
If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities.

If you are using an on-premises version of Lync Server 2013 Preview and you need to communicate with another server product that fully supports the OAuth protocol (for example, Exchange 2013 Preview or Microsoft SharePoint 2013) then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens.
However, you will need to configure the other server product (e.g., Exchange 2013 Preview) as a partner application.
(You will also need to configure Lync Server 2013 Preview as a partner application for the other server product.) In Lync Server 2013 Preview, partner applications are managed by using the CsPartnerApplication cmdlets.

To return a list of all the role-based access control (RBAC) roles this cmdlet has been assigned to (including any custom RBAC roles you have created yourself), run the following command from the Windows PowerShell prompt:

Get-CsAdminRole | Where-Object {$_.Cmdlets -match "Get-CsPartnerApplication"}

Lync Server Control Panel: The functions carried out by the Get-CsPartnerApplication cmdlet are not available in theLync Server Control Panel.

**Below Content Applies To:** Skype for Business Server 2015

In Skype for Business Server 2015, server-to-server authentication (for example, the authentication that enables Skype for Business Server 2015 and Exchange to share information) is carried out using the OAuth security protocol.
This type of authentication typically requires three servers: the two servers that need to communicate with one another (Server A and B) and a third-party security token server.
If Servers A and B need to communicate with one another, the two servers contact the token server (also known as an OAuth server) and obtain mutually-trusted security tokens that the two servers can exchange in order to prove their identities.

If you are using an on-premises version of Skype for Business Server 2015 and you need to communicate with another server product that fully supports the OAuth protocol (for example, Exchange or SharePoint) then you typically do not need to use a token server; that's because these server products are able to issue their own security tokens.
However, you will need to configure the other server product (e.g., Exchange) as a partner application.
(You will also need to configure Skype for Business Server 2015 as a partner application for the other server product.) In Skype for Business Server 2015, partner applications are managed by using the CsPartnerApplication cmdlets.

Skype for Business Server Control Panel: The functions carried out by the Get-CsPartnerApplication cmdlet are not available in the Skype for Business Server Control Panel.



## EXAMPLES

### -------------------------- Example 1 -------------------------- (Lync Server 2013)
```

```

The command shown in Example 1 returns information about all the partner applications configured for use in the organization

Get-CsPartnerApplication

### -------------------------- Example 1 -------------------------- (Skype for Business Server 2015)
```

```

The command shown in Example 1 returns information about all the partner applications configured for use in the organization

Get-CsPartnerApplication

### -------------------------- Example 2 -------------------------- (Lync Server 2013)
```

```

Example 2 returns information for the partner application that has the Identity MicrosoftExchange.

Get-CsPartnerApplication -Identity "MicrosoftExchange"

### -------------------------- Example 2 -------------------------- (Skype for Business Server 2015)
```

```

Example 2 returns information for the partner application that has the Identity MicrosoftExchange.

Get-CsPartnerApplication -Identity "MicrosoftExchange"

### -------------------------- Example 3 -------------------------- (Lync Server 2013)
```

```

In Example 3, information is returned for all the partner applications that have an application identifier equal to "microsoft.exchange." In order to do this, the command first calls Get-CsPartnerApplication without any parameters; that returns a collection of all the configured partner applications.
That collection is then piped to the Where-Object cmdlet, which picks out only those partner applications where the ApplicationIdentifier property is equal to "microsoft.exchange."

Get-CsPartnerApplication | Where-Object {$_.ApplicationIdentifier -eq "microsoft.exchange"}

### -------------------------- Example 3 -------------------------- (Skype for Business Server 2015)
```

```

In Example 3, information is returned for all the partner applications that have an application identifier equal to "microsoft.exchange." In order to do this, the command first calls the Get-CsPartnerApplication cmdlet without any parameters; that returns a collection of all the configured partner applications.
That collection is then piped to the Where-Object cmdlet, which picks out only those partner applications where the ApplicationIdentifier property is equal to "microsoft.exchange."

Get-CsPartnerApplication | Where-Object {$_.ApplicationIdentifier -eq "microsoft.exchange"}

### -------------------------- Example 4 -------------------------- (Lync Server 2013)
```

```

In Example 4, information is returned for all the partner applications that are currently disabled.
To do this, the command first calls Get-CsPartnerApplication in order to return a collection of all the partner applications, both enabled and disabled.
That collection is then piped to the Where-Object cmdlet, which selects only those applications where the Enabled property is equal to False.

Get-CsPartnerApplication | Where-Object {$_.Enabled -eq $False}

### -------------------------- Example 4 -------------------------- (Skype for Business Server 2015)
```

```

In Example 4, information is returned for all the partner applications that are currently disabled.
To do this, the command first calls the Get-CsPartnerApplication cmdlet in order to return a collection of all the partner applications, both enabled and disabled.
That collection is then piped to the Where-Object cmdlet, which selects only those applications where the Enabled property is equal to False.

Get-CsPartnerApplication | Where-Object {$_.Enabled -eq $False}

## PARAMETERS

### -Filter
Enables you to use wildcard values to return one or more partner applications.
For example, to return all the partner applications that have an Identity that includes the string value "Microsoft" use this syntax:

-Filter "*Microsoft*"

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
**Below Content Applies To:** Lync Server 2013

Unique identifier for the partner application.
For example:

-Identity "MicrosoftExchange"

If neither the identity parameter nor the Filter parameter are included in the command then Get-CsPartnerApplication will return information for all your partner applications.



**Below Content Applies To:** Skype for Business Server 2015

Unique identifier for the partner application.
For example:

-Identity "MicrosoftExchange"

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
**Below Content Applies To:** Lync Server 2013

Globally unique identifier (GUID) of the Office 365 tenant account where whose partner application settings are to be retrieved.

For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



**Below Content Applies To:** Skype for Business Server 2015

Globally unique identifier (GUID) of the Skype for Business Online tenant account where whose partner application settings are to be retrieved.

For example:

-Tenant "38aad667-af54-4397-aaa7-e94c79ec2308"

You can return the tenant ID for each of your tenants by running this command:

Get-CsTenant | Select-Object DisplayName, TenantID



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

###  
None.
Get-CsPartnerApplication does not accept pipelined input.

###  
None.
The Get-CsPartnerApplication cmdlet does not accept pipelined input.

## OUTPUTS

###  
Get-CsPartnerApplication returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.PartnerApplication#Decorated object.

###  
The Get-CsPartnerApplication cmdlet returns instances of the Microsoft.Rtc.Management.WritableConfig.Settings.SSAuth.PartnerApplication#Decorated object.

## NOTES

## RELATED LINKS

[New-CsPartnerApplication]()

[Remove-CsPartnerApplication]()

[Set-CsPartnerApplication]()

[Online Version](http://technet.microsoft.com/EN-US/library/a20738b5-d9e7-4da4-bcac-e967f73c4bdc(OCS.15).aspx)

[Online Version](http://technet.microsoft.com/EN-US/library/a20738b5-d9e7-4da4-bcac-e967f73c4bdc(OCS.16).aspx)

