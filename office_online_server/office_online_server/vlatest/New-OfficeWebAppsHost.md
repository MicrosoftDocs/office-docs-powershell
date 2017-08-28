---
external help file:
Module Name: officewebapps
online version:
schema: 2.0.0
---

# New-OfficeWebAppsHost

## SYNOPSIS
Adds a host domain to the Allow List for an Office Online Server farm.

## SYNTAX

```
New-OfficeWebAppsHost -Domain <String>
```

## DESCRIPTION
The New-OfficeWebAppsHost cmdlet adds a host domain to the list of host domains to which Office Online Server allows file operations requests, such as file retrieval, metadata retrieval, and file changes.
This list, known as the Allow List, is a security feature that prevents unwanted hosts from connecting to a Office Online Server farm and using it for file operations without your knowledge.

You may any domain type including: Public, Pool, Farm, and Active Directory domain names.
Just make sure that the domain you're granting access to meets your security requirements.

The wildcard * is assumed for any domain that is added to the Allow List so that requests to all subdomains are also allowed.
For example, if you add the domain contoso.com to the Allow List, Office Online Server also allows requests to the domains corp.contoso.com and dev.contoso.com.
Requests to other domains (such as fabrikam.com) are not allowed.

If there are no domains on the Allow List, Office Online Server allows file requests to hosts in any domain.
Do not leave this list blank if your Office Online Server farm is accessible from the Internet.
Otherwise anyone can use your Office Online Server farm to view and edit content.

## EXAMPLES

### ------------------EXAMPLE 1---------------------
```
New-OfficeWebAppsHost -domain "contoso.com"
```

This example adds the domain contoso.com to the Allow List.

You cannot add multiple host domains to the Allow List all at the same time.
You must run the New-OfficeWebAppsHost cmdlet for each host domain that you want to add to the Allow List.

## PARAMETERS

### -Domain
Specifies the domain to add to the Allow List.
Do not specify an asterisk or start it with a period.

```yaml
Type: String
Parameter Sets: (All)
Aliases: 

Required: True
Position: Named
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS