---
external help file:
Module Name: officewebapps
title: Get-OfficeWebAppsHost
online version:
schema: 2.0.0
---

# Get-OfficeWebAppsHost

## SYNOPSIS
Returns the list of host domains that are on the Allow List for an Office Online Server farm.

## SYNTAX

```
Get-OfficeWebAppsHost
```

## DESCRIPTION
The Get-OfficeWebAppsHost cmdlet returns the list of host domains to which Office Online Server allows file operations requests, such as file retrieval, metadata retrieval, and file changes.
This list, known as the Allow List, is a security feature that prevents unwanted hosts from connecting to an Office Online Server farm and using it for file operations without your knowledge.

The wildcard * is assumed for any domain that appears on the Allow List so that requests to all subdomains are also allowed.
For example, if the domain contoso.com is on the Allow List, then Office Online Server also allows requests to the domains corp.contoso.com and dev.contoso.com.
Requests to other domains (such as fabrikam.com) are not allowed.

If there are no domains on the Allow List, Office Online Server allows file requests to hosts in any domain.
Do not leave this list blank if your Office Online Server farm is accessible from the Internet.
Otherwise anyone can use your Office Online Server farm to view and edit content.

## EXAMPLES

### ------------------EXAMPLE 1---------------------
```
Get-OfficeWebAppsHost
```

This example returns the host domains that are on the Allow List.

## PARAMETERS

## INPUTS

## OUTPUTS

## NOTES

## RELATED LINKS